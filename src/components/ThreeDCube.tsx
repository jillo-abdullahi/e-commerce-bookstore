import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { authorInfo } from "@/utils/constants";

export default function ThreeCanvas() {
  const canvasRef = useRef(null);
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

    new OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/images/author.png");

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
    context.wrapText(description, 50, 80, 924, 50);

    const descTexture = new THREE.CanvasTexture(canvas);
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

    // Rotate the cube slightly on the X and Y axes
    // cube.rotation.x = Math.PI / 8; // 22.5 degrees
    cube.rotation.y = Math.PI / 6; // about 30 degrees

    scene.add(cube);

    // Create a wireframe to highlight the edges of the cube
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
    canvasRef.current.appendChild(renderer.domElement);

    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  return <div ref={canvasRef} />;
}

CanvasRenderingContext2D.prototype.wrapText = function (
  text,
  x,
  y,
  maxWidth,
  lineHeight
) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = this.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      this.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  this.fillText(line, x, y);
};
