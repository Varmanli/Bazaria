import React from "react";
import daysReturn from "../images/days-return.svg";
import express from "../images/express-delivery.svg";
import support from "../images/support.svg";
import original from "../images/original-products.svg";
import cash from "../images/cash-on-delivery.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mb-20 lg:mb-2 mt-[40px]">
      <div className=" border-b border-[#E6123D] pb-3 flex justify-around items-center ">
        <div className="flex flex-col text-[13px] ">
          <img src={daysReturn} className="h-[73px]" />
          <h1>هفت روز ضمانت بازگشت کالا</h1>
        </div>
        <div className="flex flex-col text-[13px] ">
          <img src={express} className="h-[73px]" />
          <h1>تحویل اکسپرس</h1>
        </div>
        <div className="flex flex-col text-[13px] ">
          <img src={support} className="h-[73px]" />
          <h1>7 روز هفته 24 ساعت</h1>
        </div>
        <div className="flex flex-col text-[13px] ">
          <img src={original} className="h-[73px]" />
          <h1>ضمانت اصالت کالا</h1>
        </div>
        <div className="flex flex-col text-[13px] ">
          <img src={cash} className="h-[73px]" />
          <h1>پرداخت در محل</h1>
        </div>
      </div>
      <div className="flex justify-around py-4">
        <div className="flex flex-col justify-between">
          <button>درباره ما </button>
          <button>تماس با ما</button>
          <button>قوانین و مقررات</button>
        </div>
        <div className="flex flex-col justify-around">
          <h1>آدرس : تهران خیابان ولیعصر</h1>
          <h1>تلفن : 02133333</h1>
        </div>
        <div className="flex flex-col gap-2  bg-[#142740] text-white p-2 rounded-md">
          <h1>شبکه های اجتماعی</h1>
          <div className="flex justify-around items-center">
            <FaInstagram />
            <FaTelegram />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
