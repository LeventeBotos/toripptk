import React from "react";

const MobileNavbar = () => {
  return (
    <div className="h-20 sticky top-0 left-0 z-20 bg-white w-full md:hidden gap-4 flex items-center justify-start overflow-x-scroll  p-2">
      <div className=" px-3 bg-primary active:bg-accent active:text-white rounded-xl  flex flex-col justify-evenly items-center h-12">
        <p>Történelem</p>
      </div>
    </div>
  );
};

export default MobileNavbar;
