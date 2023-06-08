import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { authorInfo } from "@/utils/constants";
import wrapCanvasText from "@/utils/wrapCanvasText";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const description = authorInfo.bio;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add controls so we can pan around with the mouse.
    new OrbitControls(camera, renderer.domElement);

    // create cube and load image texture
    const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/images/author.png");

    // canvas element for author description
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }
    // fill the entire canvas with an orange background
    context.fillStyle = "#FFEEE2";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "34px Arial";
    context.fillStyle = "black";
    wrapCanvasText(context, description, 50, 80, 924, 50);

    const descTexture = new THREE.CanvasTexture(canvas);

    // create materials using author image and description
    const material1 = new THREE.MeshBasicMaterial({
      map: texture,
      color: "#FFEEE2",
    });
    const material2 = new THREE.MeshBasicMaterial({ map: descTexture });
    const material3 = new THREE.MeshBasicMaterial({ color: "#FFEEE2" });

    const cube = new THREE.Mesh(geometry, [
      material3,
      material3,
      material3,
      material3,
      material1,
      material2,
    ]);

    // rotate the cube slightly on the Y axis
    // so we can see the 3D-ness of it on load
    cube.rotation.y = Math.PI / 6; // about 30 degrees

    scene.add(cube);

    // create a wireframe to highlight the edges of the cube
    // TODO: figure out how to make this look better
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xff0000 })
    );
    cube.add(line);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);
    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  return <div ref={canvasRef} />;
}
