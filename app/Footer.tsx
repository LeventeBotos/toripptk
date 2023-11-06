import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-24 flex flex-col justify-evenly text-white text-center font-bold bg-black ">
      <p>
        A weboldalt készítette:{" "}
        <a href="https://leventebotos.github.io" className="gradient">
          Botos Levente
        </a>
      </p>
    </div>
  );
};

export default Footer;
