import React, { useState } from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  const [category, setCategory] = useState(false);
  function toggle() {
    setCategory(!category);
  }
  return (
    <header className=" h-[75px] fixed top-0 left-0 right-0 z-20 bg-white  px-5 py-4 md:flex justify-between items-center  ">
      <button className="text-[20px] hidden md:gap-2 md:flex justify-center items-center ">
        {category ? (
          <Menu close={toggle} />
        ) : (
          <GiHamburgerMenu onClick={toggle} />
        )}
        <h1 className="text-[20px]">دسته بندی کالاها</h1>
      </button>
      <div className="flex items-center  ">
        <button className="bg-[#F0F0F1] text-[#A1A3A8] p-[14px] rounded-r-md  ">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="جستجو محصولات ..."
          className=" bg-[#F0F0F1]  w-[100%] p-[10px] rounded-l-md focus:outline-none text-[#A1A3A8]  md:w-[370px] lg:w-[450px]"
        />
      </div>
      <div className="md:gap-5 items-center md:flex hidden  ">
        <Link to="/Login">
          <button className="text-[25px] p-2 flex gap-2 items-center justify-center sm:border rounded-md    ">
            <HiOutlineLogin />
            <h1 className="text-[16px] hidden sm:block">ورود | ثبت نام </h1>
          </button>
        </Link>
        <Link to={"/ShoppingCart"}>
          <button className=" text-[24px] mr-3 ">
            <FaShoppingCart className="relative" />
            <button className="absolute rounded-sm top-8 left-9 bg-[#EF4056] text-white text-[13px] px-1 text-center">
            </button>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
