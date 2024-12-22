import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { Outlet, Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="flex fixed md:hidden bg-white z-10 bottom-0 left-0 right-0 text-[#868686] px-10 py-1 text-[22px] justify-between items-center border border-t-2 ">
      <Link to={"/"}>
        <button className="flex flex-col justify-center items-center gap-1">
          <IoMdHome />
          <h1 className="text-[15px]">خانه</h1>
        </button>
      </Link>
      <Link to={"/Category"}>
        <button className="flex flex-col justify-center items-center gap-1">
          <BiSolidCategory />
          <h1 className="text-[15px]">دسته بندی</h1>
        </button>
      </Link>
      <Link to={"/ShoppingCart"}>
        <button className="flex flex-col justify-center items-center gap-1">
          <FaShoppingCart />
          <h1 className="text-[15px]">سبد خرید</h1>
        </button>
      </Link>
      <Link to="Login">
        <button className="flex flex-col justify-center items-center gap-1">
          <FaUserAlt />
          <h1 className="text-[15px]">ورود</h1>
        </button>
      </Link>
    </div>
  );
}

export default MobileMenu;
