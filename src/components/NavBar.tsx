"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const NavBar = () => {
  const pathname = usePathname();
  const {
    cart: { productsInCart },
    user: { firstName, lastName, profileImage },
  } = useSelector((state: RootState) => state);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];

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
        <div className="flex items-center justify-center space-x-2 group">
          <div className="flex-shrink-0 flex items-center justify-center rounded-full border border-gray-500 group-hover:border-orange bg-gradient-to-r from-gray-300 to-gray-400">
            <Image
              src={profileImage}
              width={48}
              height={48}
              alt="profile"
              className="rounded-full border-orange-100 border-2"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">{firstName}</p>
            <p className="text-sm font-medium text-gray-500">{lastName}</p>
          </div>
        </div>
      ),
      href: "/account",
    },
  ];

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl border-b border-gray-200">
            <div className="relative flex h-24 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
                {/* nav links  */}
                <div className="hidden sm:flex sm:space-x-8">
                  {navLinks.map(({ href, name }, idx) => (
                    <Link
                      key={idx}
                      href={href}
                      className={clsx(
                        "inline-flex items-center px-2 pt-2 font-medium border-b-2",
                        pathname === href
                          ? "text-gray-900 border-orange"
                          : "border-transparent hover:border-gray-300 hover:text-gray-700 text-gray-500"
                      )}
                    >
                      {name}
                    </Link>
                  ))}
                </div>

                {/* nav buttons  */}
                <div className="flex space-x-8 items-center">
                  {navButtons.map(({ content, href }, idx) => (
                    <Link key={idx} href={href}>
                      {content}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state. */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navLinks.map(({ href, name }, idx) => (
                <Disclosure.Button
                  key={idx}
                  as="a"
                  href={href}
                  className={clsx(
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                    pathname === href
                      ? "bg-orange-100 border-orange text-gray-900"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  )}
                >
                  {name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
