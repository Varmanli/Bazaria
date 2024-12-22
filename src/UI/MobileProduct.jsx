import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import SliderProduct from "./SliderProduct";
import SlideProductApi from "./SlideProductMobile";
import { Link } from "react-router-dom";

function MobileProduct() {
  return (
    <div className="m-4 p-1 border rounded-xl">
      <div className="flex m-4 justify-between mx-5 items-center">
        <h1 className="text-[18px]">گوشی موبایل</h1>
        <Link to={"/ProductListMobile"}>
          <button className="flex justify-center items-center gap-2">
            مشاهده همه محصولات
            <BsArrowLeft className="text-[#601D2A] text-[20px]" />
          </button>
        </Link>
      </div>
      <SlideProductApi />
    </div>
  );
}

export default MobileProduct;
