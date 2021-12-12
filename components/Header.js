import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";

function Header() {
  const router = useRouter();
  return (
    <nav
      className=" sticky top-0 z-50 flex  bg-red-600
     h-20 items-center"
    >
      <div className="h-12">
        <Image
          onClick={() => router.push("/")}
          className="items-center cursor-pointer transform rotate-180"
          src="/bml-logo.svg"
          alt="bankofmaldives"
          objectFit="contain"
          objectPostition="left"
          width={140}
          height={60}
        />
      </div>
      <div
        className="hidden items-center sm:inline-flex
       lg:ml-auto lg:w-auto w-full pr-4"
      >
        <h2 className="text-xs text-gray-100">PERSONAL</h2>
        <ChevronDownIcon className="h-4 text-gray-100" />
        <h2 className="text-xs text-gray-100 pl-16">BUSINESS</h2>
        <ChevronDownIcon className="h-4 text-gray-100" />
        <h2 className="text-xs text-gray-100 pl-16">ISLAMIC</h2>
        <ChevronDownIcon className="h-4 text-gray-100 " />

        <h2 className="text-xs text-gray-100 px-16">NEWS AND MEDIA</h2>
        <h2 className="text-xs text-gray-100">HOW-TO VIDEOS</h2>
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
