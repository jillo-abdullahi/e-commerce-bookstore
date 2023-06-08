import { CloseButton } from "@/components/Buttons";

interface ModalTitleProps {
  title: string;
  subTitle: string;
  setIsOpen: () => void;
}

const ModalTitle: React.FC<ModalTitleProps> = ({
  title,
  subTitle,
  setIsOpen,
}) => {
  return (
    <h2 className="mb-6 bg-gray-200 border-b px-6 py-4 border-gray-300 flex items-center justify-between">
      <div>
        <p className="text-gray-900 font-bold">{title}</p>
        <p className="text-gray-800 font-light text-sm">{subTitle}</p>
      </div>
      <CloseButton setIsOpen={setIsOpen} />
    </h2>
  );
};

export default ModalTitle;
