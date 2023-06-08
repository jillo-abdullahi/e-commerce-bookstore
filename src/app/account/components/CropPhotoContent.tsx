import Image from "next/image";
import clsx from "clsx";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { CameraIcon } from "@heroicons/react/24/outline";
import ModalTitle from "@/app/shared/ModalTitle";
import getCroppedImg from "@/utils/getCroppedImg";
import { videoConstraints } from "@/app/account/components/ProfileCaptureModal";

interface CropPhotoContentProps {
  handleClose: () => void;
  setProfileImage: (image: string) => void;
  imageSrc: string;
  setCrop: React.Dispatch<React.SetStateAction<Crop>>;
  crop: Crop;
  setCroppedImageSrc: React.Dispatch<React.SetStateAction<string>>;
  croppedImageSrc: string;
}

const CropPhotoContent: React.FC<CropPhotoContentProps> = ({
  handleClose,
  setProfileImage,
  imageSrc,
  setCrop,
  crop,
  setCroppedImageSrc,
  croppedImageSrc,
}) => {
  return (
    <>
      <ModalTitle
        title="Crop photo"
        subTitle="Drag to select crop area"
        setIsOpen={handleClose}
      />

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
        className={clsx(
          "flex items-center justify-center w-full py-4 text-white bg-orange rounded-md mt-6 hover:bg-opacity-80 max-w-[400px] mx-auto",
          !croppedImageSrc ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        )}
        disabled={!croppedImageSrc}
        onClick={() => {
          setProfileImage(croppedImageSrc);
          handleClose();
        }}
      >
        <CameraIcon className="h-4 w-4 text-white mr-2" />
        Set profile photo
      </button>
    </>
  );
};

export default CropPhotoContent;
