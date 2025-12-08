import React from "react";
import { MoveRight, MoveUpRight, Search } from "lucide-react";
import RightDrawer from "./Drawer";
import { Link, useLocation } from "react-router-dom";
// "Home", "About", "Services", "Pages", "Blog", "Contacts"
const Navbar = () => {
  const location = useLocation();
  const links = [
    {   
    name:"Home",
    lin:"/"
  },
    {
    name:"About",
    lin:"/about"
  },
    {
    name:"Services",
    lin:"/service"
  },
    {
    name:"Pages",
    lin:"/pages"
  },
    {
    name:"Blog",
    lin:"/blogs"
  },
    {
    name:"Contact",
    lin:"/contact"
  }
];
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 flex z-50 justify-between h-[55px] w-[95%] xl:h-[62px]  rounded-full px-1 items-center sm:px-3 lg:px-5 xl:px-7 bg-white">
      <div className="w-auto ">
        <img
          src="/images/logo/logo.svg"
          alt="Logo"
          className="h-8 sm:h-10 lg:h-11"
        />
      </div>

      <div className="flex gap-5 items-center xl:gap-8 justify-center 2xl:gap-10">
        <div className="hidden lg:flex gap-4 2xl:gap-6" id="nav_link">
          {links.map((link) => (
            <Link
              to={link.lin}
              key={link.lin}
              className={`text-[14px] ${location.pathname ===link.lin?"bg-[#2b4dff] text-white":""} xl:text-[15px]  xl:px-4 py-2 px-3 cursor-pointer border border-[#d9d9d9] rounded-full hover:bg-[#2b4dff] hover:text-white transition-all duration-0.4s ease-in 2xl:text-base 2xl:py-3 2xl:px-4`}
            >
          {link.name}
              {/* {link} */}
            </Link>
          ))}
        </div>

        <div className="flex h-10 w-10 xl:h-11 xl:w-11 rounded-full   border-[    border: 1px solid var(--ul-gray2)] border items-center justify-center hover:bg-[#2b4dff] hover:text-white transition-all duration-400 ease-in cursor-pointer">
          <Search size={17} />
        </div>

        <div
          className="rounded-full gap-2 text-[14px] bg-[linear-gradient(90deg,#2B4DFF_0%,#C700B1_100%)] px-4 py-2 cursor-pointer text-white items-center transition-all duration-300 ease-in-out hidden sm:flex xl:text-[15px]  xl:px-4 2xl:text-base 2xl:py-3 2xl:px-4


"
        >
          Get in touch <MoveUpRight />
        </div>
                <RightDrawer/>

      </div>
    </div>
  );
};

export default Navbar;
