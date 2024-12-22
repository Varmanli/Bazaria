import React from "react";
import { FaMobileButton, FaKitchenSet } from "react-icons/fa6";
import { GiHeartEarrings, GiLargeDress, GiMilkCarton } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { CgChevronLeft } from "react-icons/cg";
import { Link } from "react-router-dom";

function CategryMobilePage() {
  return (
    <div className=" mt-[70px] flex flex-col justify-center items-center gap-7">
      <div className="text-[22px] flex items-center gap-3 ">
        <h1>دسته بندی کالاها</h1>
      </div>
      <Link to={"/ProductListMobile"}>
        <div className="flex gap-3 items-center text-[20px] cursor-pointer bg-slate-100 p-2 rounded-xl">
          <h1>موبایل</h1>
          <FaMobileButton />
          <CgChevronLeft />
        </div>
      </Link>
      <Link to={"/productListKitchen"}>
        <div className="flex gap-3 items-center bg-slate-100 p-2 rounded-xl text-[20px] cursor-pointer">
          <h1>خانه و آشپزخانه</h1>
          <FaKitchenSet />
          <CgChevronLeft />
        </div>
      </Link>
      <Link to={"/productListJavaher"}>
        <div className="flex gap-3 items-center text-[20px] bg-slate-100 p-2 rounded-xl cursor-pointer">
          <h1>طلا و جواهرات</h1>
          <GiHeartEarrings />
          <CgChevronLeft />
        </div>
      </Link>
      <Link to={"/productListBook"}>
        <div className="flex gap-3 items-center text-[20px] bg-slate-100 p-2 rounded-xl cursor-pointer">
          <h1>کتاب و لوازم تحریر</h1>
          <FaBook />
          <CgChevronLeft />
        </div>
      </Link>
      <Link to={"/productListPoshak"}>
        <div className="flex gap-3 items-center text-[20px] bg-slate-100 p-2 rounded-xl cursor-pointer">
          <h1>پوشاک</h1>
          <GiLargeDress />
          <CgChevronLeft />
        </div>
      </Link>
      <Link to={"/productListSuperMarket"}>
        <div className="flex gap-3 items-center text-[20px] bg-slate-100 p-2 rounded-xl cursor-pointer">
          <h1>کالاهای سوپرمارکتی</h1>
          <GiMilkCarton />
          <CgChevronLeft />
        </div>
      </Link>
    </div>
  );
}

export default CategryMobilePage;
