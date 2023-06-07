import Webcam from "react-webcam";
import { useRef, useState, useCallback, Dispatch, SetStateAction } from "react";
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
  setProfileImage: Dispatch<SetStateAction<string>>;
}
const ProfileCaptureModal: React.FC<ProfileCaptureModalProps> = ({
  isOpen,
  setIsOpen,
  setProfileImage,
}) => {
  const webcamRef = useRef<Webcam>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 10,
    y: 10,
    width: 80,
    height: 80,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [imageSrc, setImageSrc] = useState<string | null>("");

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

  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      <div className="pb-4 bg-gray-200">
        {imageSrc ? (
          <div>
            <ModalTitle title="Crop photo" setIsOpen={setIsOpen} />
            <div className="mx-auto w-[400px] h-[400px]">
              <ReactCrop
                crop={crop}
                onChange={(percentCrop) => setCrop(percentCrop)}
                onComplete={(newCrop) => {
                  setCompletedCrop(newCrop);
                  if (newCrop.width && newCrop.height) {
                    const croppedImageSrc = getCroppedImg(imageSrc, newCrop);

                    // store the cropped image in state for now
                    // TODO: upload the cropped image to the server
                    setProfileImage(croppedImageSrc);
                  }
                }}
                circularCrop={true}
                aspect={1}
                minHeight={50}
                minWidth={50}
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
              onClick={setIsOpen}
            >
              <CameraIcon className="h-4 w-4 text-white mr-2" />
              Set profile photo
            </button>
          </div>
        ) : (
          <>
            <ModalTitle title="Change profile photo" setIsOpen={setIsOpen} />
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
