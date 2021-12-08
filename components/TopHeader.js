function TopHeader() {
  return (
    <div className="hidden sm:grid grid-cols-7 divide-x divide-gray-300">
      <div className="text-xs p-4 text-red-500 font-bold text-center">
        SCHEDULE OF CHARGES
      </div>
      <div className="text-xs p-4 text-red-500 font-bold text-center">
        EXCHANGE RATES
      </div>
      <div className="text-xs p-4 text-red-500 font-bold text-center">
        CUSTOMER SERVICE
      </div>
      <div className="text-xs p-4 text-red-500 font-bold text-center">
        INVESTORS RELATIONS
      </div>
      <div className="text-xs p-4 text-red-500 font-bold text-center">CSR</div>
      <div className="text-xs p-4 text-red-500 font-bold text-center">
        ABOUT US
      </div>
      <div className="text-xs p-4 text-red-500 font-bold text-center">
        DOWNLOADS
      </div>
    </div>
  );
}

export default TopHeader;
