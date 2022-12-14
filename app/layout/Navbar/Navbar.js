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
      {/* I can use sticky and top-0 */}
      <header className={`relative z-10 border-b border-[#ffffff24]`}>
        <nav className={`container`}>
          <div className="flex justify-between items-center w-full py-3 md:py-4 lg:py-0">
            {/* Logo */}
            <Link href="/" className="">
              <div className="w-[148px] md:w-[170px]">
                <Image
                  src="/icons/menu-logo.png"
                  width="170"
                  height="70"
                  alt="Logo"
                  className="object-contain"
                />
              </div>
            </Link>
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
                "fixed bg-teal-700 !left-[-350px] lg:!left-0 transition-all lg:!transition-none !duration-[350ms] ease-in-out lg:!duration-[0ms] !z-[1090]"
              } fixed top-0 left-0 bg-mobileNavBg lg:relative lg:top-0 !z-[1100] lg:justify-between w-[350px] h-screen lg:h-auto flex-col flex lg:flex lg:w-auto lg:order-1 lg:bg-transparent transition-all duration-[400ms] lg:!transition-none ease-in lg:!duration-[0ms] overflow-y-scroll lg:!overflow-y-visible no-scrollbar`}
            >
              {/* ==== Menu Close Icon & Menu Logo for mobile ==== */}
              <div className="flex lg:hidden pt-10 pb-8 px-8 justify-between items-center">
                <img
                  src="/icons/footer-logo.png"
                  className="w-32 object-contain"
                />
                <div
                  className="cursor-pointer text-colorText lg:hidden flex justify-end p-3 bg-colorSecondary rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <AiOutlineClose size={18} className="text-navTextColor" />
                </div>
              </div>
              {/* Nav Menu */}
              <div className={`nav-menu flex items-center lg:gap-24`}>
                <ul className="main-menu pl-8 lg:pl-0 flex-col lg:flex-row lg:flex lg:items-center lg:flex-wrap lg:gap-10 space-y-8 lg:space-y-0">
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

        {/* Animation backDrop */}
        <div
          className={`${
            searchBackDrop &&
            "bg-popUpBg fixed top-0 left-0 w-full h-full z-[999] !opacity-80 overflow-hidden pb-[100%] rounded-full animate-backDrop hidden lg:block"
          }`}
        ></div>

        {/* BackDrop */}
        <div
          className={`${
            !searchBackDrop
              ? "absolute hidden lg:block lg:top-[-1080px] top-0 lg:!duration-[0ms] z-[995] delay-[0ms]"
              : "lg:absolute hidden lg:block lg:top-0 lg:left-0 relative top-0 z-[1000] w-screen h-screen lg:duration-[1200ms] ease-in-out delay-300"
          }`}
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
                className="w-full pl-8 pr-12 py-6 rounded-xl bg-popUpBg !opacity-50 border border-blue-700 text-navTextColor"
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
