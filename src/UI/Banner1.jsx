import React from "react";
import polopaz from "../images/polopaz.png";
import tablet from "../images/tablet.png";
import power from "../images/powerbank.png";

function Banner1() {
  return (
    <div className="flex flex-col justify-center items-center m-3 gap-4 rounded-xl lg:flex-row ">
      <img src={polopaz} className="rounded-xl lg:w-[32%]" />
      <img src={tablet} className="rounded-xl lg:w-[32%]"/>
      <img src={power} className="rounded-xl lg:w-[32%]"/>
    </div>
  );
}

export default Banner1;
