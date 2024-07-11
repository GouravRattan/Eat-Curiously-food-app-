import React from "react";

const ScrollablePage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-[#788032] flex flex-col items-center cursor-pointer">
      <div className="flex flex-col items-center py-10">
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">PIECES</h1>
        <h1 className="text-7xl font-bold text-[#b0b0b0] mb-10 relative">
          MINCE
          <span className="absolute top-0 right-0 text-sm bg-white text-black px-2 py-1 rounded-full">NEW</span>
        </h1>
        <h1 className="text-7xl font-bold text-[#b0b0b0] mb-10 relative">
          NEGG
          <span className="absolute top-0 right-0 text-sm bg-white text-black px-2 py-1 rounded-full">NEW</span>
        </h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">FILLETS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        <h1 className="text-7xl font-bold text-[#0f3c1d] mb-10">TENDERS</h1>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default ScrollablePage;
