"use client";

import { useState } from "react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { updateUser } from "@/redux/slices/userSlice";
import ProfileCaptureModal from "@/app/account/components/ProfileCaptureModal";
import ProfileDetailsForm from "@/app/account/components/ProfileDetailsForm";
import { ToastNotification, notify } from "@/app/shared/ToastNotification";

export default function AccountPage() {
  const {
    user: { firstName, lastName, profileImage, email, billingStatus },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName,
    lastName,
    profileImage,
    email,
    billingStatus,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleProfileImageChange = (image: string) => {
    setUserDetails({
      ...userDetails,
      profileImage: image,
    });
  };

  // push changes to redux store
  const handleSaveChanges = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser(userDetails));
    notify("Profile updated successfully");
  };

  const openCaptureModal = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto pt-12 pb-24 max-w-[1015px]">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-900">
        Account settings
      </h1>
      <h2 className="font-light mb-10">Manage your account details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-x-2">
        {/* profile image  */}
        <div className="lg:col-span-5">
          <div className="flex flex-col items-center lg:items-start justify-center h-full pb-10 lg:pb-0">
            <div
              className="relative rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border-gray-500 border cursor-pointer"
              onClick={openCaptureModal}
            >
              <Image
                src={userDetails.profileImage}
                alt="profile image"
                width={300}
                height={300}
                className="rounded-full border-orange-100 border-4"
              />
              <button
                className="absolute group bottom-7 right-7 bg-gray-100 rounded-full p-2 hover:bg-orange"
                onClick={openCaptureModal}
              >
                <PencilIcon className="h-4 w-4 text-orange group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* profile details */}
        <ProfileDetailsForm
          userDetails={userDetails}
          handleInputChange={handleInputChange}
          handleSaveChanges={handleSaveChanges}
        />
      </div>

      {/* profile image capture modal */}
      <ProfileCaptureModal
        isOpen={open}
        setIsOpen={openCaptureModal}
        setProfileImage={handleProfileImageChange}
      />

      <ToastNotification />
    </div>
  );
}
