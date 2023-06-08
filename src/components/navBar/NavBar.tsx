"use client";

import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavBarButtons from "@/components/navBar/NavBarButtons";
import NavBarLinks, { navLinks } from "@/components/navBar/NavBarLinks";

const NavBar = () => {
  const pathname = usePathname();

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
                <NavBarLinks />

                {/* nav profile image and cart */}
                <NavBarButtons />
              </div>
            </div>
          </div>

          {/* mobile menu, show/hide based on menu state. */}
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
