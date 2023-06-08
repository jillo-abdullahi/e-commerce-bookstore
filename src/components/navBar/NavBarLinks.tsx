import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
];

const NavBarLinks: React.FC = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default NavBarLinks;
