import { CloseButton } from "@/components/Buttons";

interface ModalTitleProps {
  title: string;
  setIsOpen: () => void;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ title, setIsOpen }) => {
  return (
    <h2 className="mb-6 bg-gray-200 border-b px-6 py-4 border-gray-300 flex items-center justify-between">
      <p className="text-gray-900 font-bold">{title}</p>
      <CloseButton setIsOpen={setIsOpen} />
    </h2>
  );
};

export default ModalTitle;
