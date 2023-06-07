import Webcam from "react-webcam";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ReactCrop, { type Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Modal } from "@/components/Modal";
import { CameraIcon } from "@heroicons/react/24/outline";
import getCroppedImg from "@/utils/getCroppedImg";
import ModalTitle from "@/components/ModalTitle";

interface ProfileCaptureModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setProfileImage: (image: string) => void;
}
const ProfileCaptureModal: React.FC<ProfileCaptureModalProps> = ({
  isOpen,
  setIsOpen,
  setProfileImage,
}) => {
  const webcamRef = useRef<Webcam>(null);

  // default crop area size as a percentage of the image size
  const defaultCrop: Crop = {
    unit: "%",
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  };
  const [crop, setCrop] = useState<Crop>(defaultCrop);
  const [imageSrc, setImageSrc] = useState<string | null>("");
  const [croppedImageSrc, setCroppedImageSrc] = useState<string>("");

  // capture the image from the webcam
  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();

    setImageSrc(imageSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  // constrain the video size so we get a consistent webcam size
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  // clear modal state on close
  const handleClose = () => {
    setImageSrc(null);
    setCrop(defaultCrop);
    setIsOpen();
  };

  // set default crop area when image is loaded
  // TODO: fix this
  useEffect(() => {
    if (!imageSrc) return;

    const defCrop: Crop = {
      x: 40,
      y: 40,
      width: 320,
      height: 320,
      unit: "px",
    };

    setCroppedImageSrc(getCroppedImg(imageSrc, defCrop));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  return (
    <Modal open={isOpen} setOpen={handleClose}>
      <div className="pb-4 bg-gray-200">
        {imageSrc ? (
          <div>
            <ModalTitle title="Crop photo" setIsOpen={handleClose} />
            <div className="mx-auto w-[400px] h-[400px]">
              <ReactCrop
                crop={crop}
                onChange={(percentCrop) => setCrop(percentCrop)}
                onComplete={(newCrop) => {
                  if (newCrop.width && newCrop.height) {
                    setCroppedImageSrc(getCroppedImg(imageSrc, newCrop));
                  }
                }}
                circularCrop={true}
                aspect={1}
                minHeight={50}
                minWidth={50}
                keepSelection={true}
                locked={true}
              >
                <Image
                  src={imageSrc}
                  alt="profile image"
                  height={videoConstraints.height}
                  width={videoConstraints.width}
                />
              </ReactCrop>
            </div>
            <button
              className="flex items-center justify-center w-full py-4 text-white bg-orange rounded-md mt-6 hover:bg-opacity-80 max-w-[400px] mx-auto"
              onClick={() => {
                setProfileImage(croppedImageSrc);
                handleClose();
              }}
            >
              <CameraIcon className="h-4 w-4 text-white mr-2" />
              Set profile photo
            </button>
          </div>
        ) : (
          <>
            <ModalTitle title="Change profile photo" setIsOpen={handleClose} />
            <div className="border border-dashed border-gray-400 rounded-md overflow-hidden mx-auto w-[400px] h-[400px]">
              <Webcam
                audio={false}
                ref={webcamRef}
                height={videoConstraints.height}
                width={videoConstraints.width}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
            <button
              className="flex items-center justify-center w-full py-4 text-white bg-orange rounded-md mt-6 hover:bg-opacity-80
              max-w-[400px] mx-auto"
              onClick={capture}
            >
              <CameraIcon className="h-4 w-4 text-white mr-2" />
              Capture photo
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ProfileCaptureModal;
