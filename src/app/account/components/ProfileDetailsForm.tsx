import InputField from "@/app/account/components/InputField";

interface ProfileDetailsFormProps {
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    billingStatus: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveChanges: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const ProfileDetailsForm: React.FC<ProfileDetailsFormProps> = ({
  userDetails,
  handleInputChange,
  handleSaveChanges,
}) => {
  return (
    <form className="lg:col-span-7" onSubmit={handleSaveChanges}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputField
            label="First name"
            type="text"
            name="first-name"
            id="firstName"
            required={true}
            value={userDetails.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label="Last name"
            type="text"
            name="last-name"
            id="lastName"
            required={true}
            value={userDetails.lastName}
            onChange={handleInputChange}
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
        <button
          type="submit"
          className="flex items-center justify-center py-3 px-6 text-white bg-orange rounded-md hover:bg-opacity-80 max-w-[500px]"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default ProfileDetailsForm;
