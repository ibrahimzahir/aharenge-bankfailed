function Footer() {
  return (
    <div className="bg-black py-6 ">
      <div
        className="container md:auto sm:pl-24 grid grid-cols-1 sm:grid-cols-6
     sm:divide-x sm:grid-white space-x-6 items-center "
      >
        <div className="text-gray-400 text-xs text-center py-4 sm:py-0">
          WORK WITH US
        </div>
        <div className="text-gray-400 text-xs text-center py-4 sm:py-0">
          FIND US
        </div>
        <div className="text-gray-400 text-xs text-center py-4 sm:py-0">
          FRAUD PREVENTION
        </div>
        <div className="text-gray-400 text-xs text-center py-4 sm:py-0">
          REGULATIONS
        </div>
        <div className="text-gray-400 text-xs text-center py-4 sm:py-0">
          FAQ
        </div>
        <div className="text-gray-400 text-xs text-center py-4 sm:py-0">
          PRIVACY STATEMENT
        </div>
      </div>
      <div className="hidde sm:divide-y sm:divide-gray-400 px-32 py-4">
        <div className="container auto sm:pl-32 "></div>
        <div className="text-gray-200 text-sm py-5 px-4"> © Aharengge Bank</div>
      </div>
    </div>
  );
}

export default Footer;
