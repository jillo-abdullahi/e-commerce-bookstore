'use client';

import { Dispatch, SetStateAction } from "react";

interface QuantityButtonProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="isolate inline-flex rounded-md items-center">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-gray-100 px-3 py-2 font-semibold text-orange focus:z-10"
        onClick={() =>
          setQuantity((prevState) =>
            prevState >= 1 ? prevState - 1 : prevState
          )
        }
      >
        -
      </button>
      <span className="text-center font-bold w-6 bg-gray-100 h-full py-2 ">
        {quantity}
      </span>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md  border-transparent bg-gray-100 px-3 py-2 font-semibold text-orange focus:z-10 flex-shrink-0"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export { QuantityButton };
