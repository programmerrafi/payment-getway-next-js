import React, { useEffect, useState } from "react";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";
import Image from "next/image";
import Link from "next/link";
import ButtonC from "../../components/shared/ButtonC";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchBackDrop, setSearchBackDrop] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const nav = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
    return () => {
      window.removeEventListener("scroll", nav);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-colorSecondary relative z-10 border-b border-[#ffffff24]`}
      >
        {/* <header
        className={`sticky top-0 z-[1005] bg-black w-full ${
          navbar && "bg-black"
        }`}
      > */}
        <nav className={`container`}>
          <div className="flex justify-between items-center w-full py-5 lg:py-0">
            {/* Logo */}
            <Link href="/" className="hidden md:block">
              <div className="">
                <Image
                  src="/icons/menu-logo.png"
                  width="170"
                  height="70"
                  alt="Logo"
                  className="object-contain"
                />
              </div>
            </Link>
            {/* Logo mobile */}
            {/* <Link href="/" className="block md:hidden">
              <div className="w-[65px] sm:w-[90px] object-contain">
                <img
                  // src="/icons/logo-mobile.png"
                  src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"
                  className="w-full h-full"
                />
              </div>
            </Link> */}
            {/* Menu */}
            <div
              className="menu lg:hidden cursor-pointer"
              onClick={() => setOpen((x) => !x)}
            >
              <HiOutlineMenuAlt3 size={40} className="text-navTextColor" />
            </div>

            {/* NavList */}
            <div
              className={`${
                !open &&
                "absolute bg-teal-700 !left-[-350px] lg:!left-0 transition-all lg:!transition-none !duration-[200ms] ease-in-out lg:!duration-[0ms] z-[1000]"
              } absolute top-0 left-0 bg-pink-400 lg:relative lg:top-0 z-[999] lg:justify-between w-[350px] h-screen lg:h-auto flex-col flex lg:flex lg:w-auto lg:order-1 lg:bg-transparent transition-all duration-[1500ms] lg:!transition-none ease-in-out lg:!duration-[0ms]`}
            >
              {/* ==== Menu Close Icon & Menu Logo for mobile ==== */}
              <div className="flex lg:hidden py-8 px-4 justify-between">
                <img
                  // src="/icons/nav-logo.png"
                  src="https://www.datocms-assets.com/45470/1631026680-logo-react-native.png"
                  className="w-20 object-contain"
                />
                <div
                  className="cursor-pointer text-colorText lg:hidden flex justify-end p-4"
                  onClick={() => setOpen(false)}
                  // onClick={() => console.log("click")}
                >
                  <AiOutlineClose size={20} />
                </div>
              </div>
              {/* Nav Menu */}
              <div className={`nav-menu flex items-center lg:gap-28`}>
                <ul className="main-menu pl-10 lg:pl-0 flex-col lg:flex-row lg:flex lg:items-center lg:flex-wrap gap-10 space-y-10 lg:space-y-0">
                  <NavLi text="Home" />
                  <NavLi text="About" />
                  <DropDownLI text="Services" />
                  <DropDownLI text="Features" />
                  <NavLi text="Contact" />
                </ul>
                {/* Button & Search */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-8">
                    <div
                      className="cursor-pointer p-2"
                      onClick={() => setSearchBackDrop(true)}
                    >
                      <BiSearch
                        size={25}
                        className="text-navTextColor hover:text-searchBg"
                      />
                    </div>
                    <ButtonC title="Get Free Trial" className="text-base" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* BackDrop */}
        <div
          className={`${
            !searchBackDrop &&
            "absolute hidden lg:block bg-teal-700 lg:top-[-1080px] top-0 lg:!duration-[600ms] ease-in-out z-[995]"
          } lg:absolute hidden lg:block lg:top-0 lg:left-0 lg:bg-popUpBg opacity-60 relative top-0 z-[1000] w-screen h-screen lg:duration-[1200ms] ease-in-out`}
          onClick={() => setSearchBackDrop(false)}
        >
          <div className="w-full h-screen flex items-center justify-center">
            <div
              className="w-1/2 py-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-12 py-6 rounded-xl bg-popUpBg text-navTextColor"
              />
              <BiSearch
                size={25}
                className="text-navTextColor cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;