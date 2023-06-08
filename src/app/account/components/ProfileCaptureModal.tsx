import { useState } from "react";
import { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Modal } from "@/app/shared/Modal";
import CropPhotoContent from "@/app/account/components/CropPhotoContent";
import PhotoCaptureContent from "@/app/account/components/PhotoCaptureContent";

interface ProfileCaptureModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  setProfileImage: (image: string) => void;
}

// constrain the video size so we get a consistent webcam size
export const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

const ProfileCaptureModal: React.FC<ProfileCaptureModalProps> = ({
  isOpen,
  setIsOpen,
  setProfileImage,
}) => {
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

  // clear modal state on close
  const handleClose = () => {
    setImageSrc(null);
    setCrop(defaultCrop);
    setIsOpen();
    setCroppedImageSrc("");
  };

  return (
    <Modal open={isOpen} setOpen={handleClose}>
      <div className="pb-4 bg-gray-200">
        {imageSrc ? (
          <CropPhotoContent
            handleClose={handleClose}
            setProfileImage={setProfileImage}
            imageSrc={imageSrc}
            setCrop={setCrop}
            crop={crop}
            setCroppedImageSrc={setCroppedImageSrc}
            croppedImageSrc={croppedImageSrc}
          />
        ) : (
          <PhotoCaptureContent
            handleClose={handleClose}
            setImageSrc={setImageSrc}
          />
        )}
      </div>
    </Modal>
  );
};

export default ProfileCaptureModal;
