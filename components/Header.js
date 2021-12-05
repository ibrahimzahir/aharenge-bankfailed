import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header
      className="sticky top-0 grid grid-cols-2 bg-red-600
     h-20 items-center"
    >
      <div className="h-12">
        <Image
          className=" cursor-pointer transform rotate-180"
          src="/bml-logo.svg"
          alt="bankofmaldives"
          objectFit="contain"
          objectPostition="left"
          width={140}
          height={60}
        />
      </div>
      <div className="flex space-x-2 items-center justify-end pr-4">
        <SearchIcon className="h-8 text-gray-100" />
        <UserCircleIcon className="h-8  text-gray-100" />
        <ChevronDownIcon className="h-6 text-gray-100" />
      </div>
    </header>
  );
}

export default Header;
