import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import ModalTitle from "@/app/shared/ModalTitle";
import { CameraIcon } from "@heroicons/react/24/outline";
import { videoConstraints } from "@/app/account/components/ProfileCaptureModal";

interface PhotoCaptureContentProps {
  handleClose: () => void;
  setImageSrc: React.Dispatch<React.SetStateAction<string | null>>;
}

const PhotoCaptureContent: React.FC<PhotoCaptureContentProps> = ({
  handleClose,
  setImageSrc,
}) => {
  const webcamRef = useRef<Webcam>(null);

  // capture the image from the webcam
  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();

    setImageSrc(imageSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);
  return (
    <>
      <ModalTitle
        title="Change profile photo"
        subTitle="Allow access to webcam to update"
        setIsOpen={handleClose}
      />
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
  );
};

export default PhotoCaptureContent;
