import React from "react";
import tv from "../images/tv.png";
import panke from "../images/panke.png";
function Banner2() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 m-3 lg:flex-row lg:gap-12 ">
      <img src={panke} className="rounded-xl lg:w-[45%]" />
      <img src={tv}  className="rounded-xl lg:w-[45%]" />
    </div>
  );
}

export default Banner2;
