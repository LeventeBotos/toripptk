import React from "react";

const DesktopNavbar = () => {
  return (
    <div className="w-1/3 absolute top-0 left-0 z-10 bg-whitee md:flex text-xl h-full pt-10 hidden items-center flex-col gap-4 p-2">
      <div className="w-2/3 bg-primary active:bg-accent active:text-white rounded-xl  flex flex-col justify-evenly items-center h-12">
        <p>Történelem</p>
      </div>
    </div>
  );
};

export default DesktopNavbar;
