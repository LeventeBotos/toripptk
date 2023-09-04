"use client";

import { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export const Navbar = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartItemsNum, setCartItemsNum] = useState<number>(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);
    }
  }, []);

  useEffect(() => {
    setCartItemsNum(cartItems.length);
  }, [cartItems]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-30 flex h-20 items-center justify-between bg-[#f5f5f5] bg-opacity-50 p-3 backdrop-blur-lg backdrop-filter md:h-24">
      <div className="flex justify-between items-center w-full">
        <a
          href="/"
          className="md:w-1/4 w-1/3 md:h-20 h-16 justify-center items-start flex flex-col"
        >
          <img
            src="/logo.png"
            alt="logo"
            className=" bg-[#f5f5f5] rounded-full opacity-100 object-contain p-1 h-16 md:h-20"
          />
        </a>
        {/* <a
        href="/shop"
        className="w-1/3 md:w-2/3 lg:w-1/3 xl:w-1/2  hidden mx-5 md:flex m-1 bg-gray-200  rounded-lg"
      >
        <input
          type="text"
          placeholder="Keresés..."
          className="h-12 bg-gray-200 rounded-lg w-full p-2"
          aria-label="keresés"
        />
        <button
          type="submit"
          className="w-12 h-12 rounded-lg bg-[#3F7CAC] text-gray-200"
        >
          <AiOutlineSearch />
        </button>
      </a> */}
        <button
          aria-label="menu"
          className="bg-transparent m-0 w-12 block h-12 items-center hover:text-black lg:hidden"
          onClick={togglePanel}
        >
          {isOpen ? (
            <GrClose className="h-full w-full bg-transparent transition-all ease-in-out duration-200 hover:text-black" />
          ) : (
            <AiOutlineMenu className="h-full w-full m-0 bg-transparent transition-all ease-in-out duration-200 hover:text-black" />
          )}
        </button>
        <div className=" hidden self-center w-1/4 lg:block lg:items-center">
          <div className="flex flex-row justify-evenly gap-2">
            <a href="/">
              <button
                aria-label="főoldal"
                className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent px-5 p-3 text-center text-black hover:border-black transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
              >
                Főoldal
              </button>
            </a>
            <a href="/shop">
              {" "}
              <button
                aria-label="Kínálatunk"
                className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent px-5 p-3 text-center text-black hover:border-black transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
              >
                Kínálatunk
              </button>
            </a>
            <a href="/kapcsolat">
              {" "}
              <button
                aria-label="Kapcsolat"
                className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent px-5 p-3 text-center text-black hover:border-black transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
              >
                Kapcsolat
              </button>
            </a>

            {/* {openLang ? "open" : "closed"} */}
          </div>
        </div>
        <div className=" w-1/4 items-end justify-end flex-row hidden lg:flex">
          <a href="/kosar" className="relative">
            <div className="absolute flex justify-evenly top-0 left-0 z-10 bg-[#3F7CAC] rounded-full w-5 text-center text-white items-center h-5">
              <p>{cartItemsNum}</p>
            </div>
            <AiOutlineShoppingCart className=" hover:text-gray-400 duration-500 ease-in-out transition-all m-3 text-3xl self-center" />
          </a>
          <a href="/auth">
            <button
              aria-label="Munkatársi belépés"
              className=" items-center rounded-full border-4 border-solid border-transparent bg-transparent px-5 p-3 text-center text-black hover:border-black transition-all ease-in-out duration-500 hover:bg-black hover:text-white"
            >
              Munkatársi belépés
            </button>
          </a>
        </div>
      </div>
      {/* 
      =========================================================================================================================
      Mobile Navbar
      =========================================================================================================================
      */}
      <div
        className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col justify-between bg-[#1f1f1f] lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        id="nav-panel"
      >
        <div className="flex flex-col items-center content-around justify-center gap-3 py-5">
          <a href="/" className="w-2/3">
            <button
              aria-label="Főoldal"
              className="flex w-full rounded-full bg-white text-center hover:bg-black transition-all ease-in-out duration-500 hover:underline"
            >
              <span className="rounded-full bg-[#1f1f1f] whitee text-white">
                Főoldal
              </span>
            </button>
          </a>
          <a href="/shop" className="w-2/3">
            <button
              aria-label="Keresés"
              className="flex w-full rounded-full bg-white text-center hover:bg-black transition-all ease-in-out duration-500 hover:underline"
            >
              <span className="rounded-full bg-[#1f1f1f] whitee text-white">
                Kínálatunk
              </span>
            </button>
          </a>

          <a href="/kapcsolat" className="w-2/3">
            <button
              aria-label="Kapcsolat"
              className="flex w-full rounded-full bg-white text-center hover:bg-black transition-all ease-in-out duration-500 hover:underline"
            >
              <span className="rounded-full bg-[#1f1f1f] whitee text-white">
                Kapcsolat
              </span>
            </button>
          </a>
          <a className="w-2/3" href="/kosar">
            <button
              aria-label="Kosar"
              className="flex w-full rounded-full bg-white text-center hover:bg-black transition-all ease-in-out duration-500 hover:underline"
            >
              <span className="rounded-full relative text-[#3F7CAC] p-0 text-center items-center flex justify-center bg-white">
                <div className="absolute flex justify-evenly top-0 left-10 z-10 bg-[#3F7CAC] rounded-full w-6 text-center text-white items-center h-6">
                  <p>{cartItemsNum}</p>
                </div>
                <AiOutlineShoppingCart className=" w-14 h-12 rounded-full p-1 text-black hover:text-[#3F7CAC] hover:bg-black duration-500 ease-in-out transition-all text-md self-center" />
              </span>
            </button>
          </a>
          <a href="/auth" className="w-2/3">
            <button
              aria-label="Munkatarsaknak"
              className="flex w-full rounded-full bg-white text-md text-center hover:bg-black transition-all ease-in-out duration-500 hover:underline"
            >
              <span className="rounded-full py-1 bg-[#1f1f1f] whitee text-white">
                Munkatársi belépés
              </span>
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
