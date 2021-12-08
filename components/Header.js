import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <nav
      className=" sticky top-0 z-50 flex  bg-red-600
     h-20 items-center"
    >
      <div className="h-12">
        <Image
          className="items-center cursor-pointer transform rotate-180"
          src="/bml-logo.svg"
          alt="bankofmaldives"
          objectFit="contain"
          objectPostition="left"
          width={140}
          height={60}
        />
      </div>
      <div className="items-center inline-flex lg:ml-auto lg:w-auto w-full justify-end pr-4">
        <SearchIcon className="hidden md:inline-flex h-8 text-gray-100" />
        <UserCircleIcon className="h-8  text-gray-100" />
        <ChevronDownIcon className="h-6 text-gray-100" />
      </div>
    </nav>
  );
}

export default Header;
