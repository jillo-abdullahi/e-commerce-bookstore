"use client";

import { useState } from "react";
import InputField from "@/components/InputField";

import Image from "next/image";
import { PencilIcon } from "@heroicons/react/24/outline";
import ProfileCaptureModal from "@/containers/ProfileCaptureModal";

export default function AccountPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("/images/favicon.svg");

  const [open, setOpen] = useState(false);

  const openCaptureModal = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto pt-12 pb-24 max-w-[1015px]">
      <h1 className="text-2xl sm:text-4xl font-bold mb-12 text-gray-900">
        Account settings
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-x-2">
        {/* profile image  */}
        <div className="lg:col-span-5">
          <div className="flex flex-col items-center lg:items-start justify-center h-full pb-10 lg:pb-0">
            <div
              className="relative rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border-gray-500 border cursor-pointer"
              onClick={openCaptureModal}
            >
              <Image
                src={profileImage}
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
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <InputField
                label="First name"
                type="text"
                name="first-name"
                id="first-name"
                value=""
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-3">
              <InputField
                label="Last name"
                type="text"
                name="last-name"
                id="last-name"
                value=""
                onChange={() => {}}
              />
            </div>

            <div className="sm:col-span-4">
              <InputField
                label="Email address"
                id="email"
                name="email"
                type="email"
                value="jillo.woche@gmail.com"
                disabled={true}
              />
            </div>

            <div className="sm:col-span-2">
              <InputField
                label="Billing status"
                id="billing-status"
                name="billing-status"
                type="text"
                value="Pro"
                disabled={true}
              />
            </div>
          </div>

          {/* save changes button  */}
          <div className="flex justify-center lg:justify-start mt-10">
            <button className="flex items-center justify-center py-3 px-6 text-white bg-orange rounded-md hover:bg-opacity-80 max-w-[500px]">
              Save changes
            </button>
          </div>
        </div>
      </div>

      {/* profile image capture modal */}
      <ProfileCaptureModal
        isOpen={open}
        setIsOpen={openCaptureModal}
        setProfileImage={setProfileImage}
      />
    </div>
  );
}
