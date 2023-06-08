import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const NavBarButtons: React.FC = () => {
  const {
    cart: { productsInCart },
    user: { firstName, lastName, profileImage },
  } = useSelector((state: RootState) => state);

  const navButtons = [
    {
      content: (
        <div className="relative">
          <ShoppingCartIcon
            className="block h-8 w-8 transition-colors duration-100 ease-linear text-gray-500 hover:text-gray-900"
            aria-hidden="true"
          />
          <span className="absolute -top-1 -right-1 text-xs font-bold text-white bg-orange rounded-full px-1">
            {Object.keys(productsInCart).length}
          </span>
        </div>
      ),
      href: "/cart",
    },
    {
      content: (
        <div className="flex items-center justify-center space-x-3 group">
          <div className="max-w-[80px]">
            <p className="text-sm font-medium text-gray-700 truncate">
              {firstName}
            </p>
            <p className="text-sm font-medium text-gray-500 truncate">
              {lastName}
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center rounded-full border border-gray-500 group-hover:border-orange bg-gradient-to-r from-gray-300 to-gray-400">
            <Image
              src={profileImage}
              width={48}
              height={48}
              alt="profile"
              className="rounded-full border-orange-100 border-2"
            />
          </div>
        </div>
      ),
      href: "/account",
    },
  ];

  return (
    <div className="flex space-x-8 items-center">
      {navButtons.map(({ content, href }, idx) => (
        <Link key={idx} href={href}>
          {content}
        </Link>
      ))}
    </div>
  );
};

export default NavBarButtons;
