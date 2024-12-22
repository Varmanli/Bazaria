import React from "react";
import category from "../images/category.png";
import category1 from "../images/category1.png";
import category2 from "../images/category2.png";
import category3 from "../images/category3.png";
import category4 from "../images/category4.png";
import category5 from "../images/category5.png";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="flex justify-center flex-col gap-6 mt-5 md:flex-row">
      <div className="flex justify-between items-center md:gap-6">
        <Link to={"/ProductListMobile"}>
          <div className="text-center">
            <img src={category} className="h-[140px]" />
            <h1>موبایل</h1>
          </div>
        </Link>
        <Link to={"/productListJavaher"}>
          <div className="text-center">
            <img src={category1} className="h-[140px]" />
            <h1>طلا جواهرات</h1>
          </div>
        </Link>
        <Link to={"/ProductListBook"}>
          <div className="text-center">
            <img src={category2} className="h-[140px]" />
            <h1>کتاب و لوازم تحریر</h1>
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center md:gap-6">
        <Link to={"/productListPoshak"}>
          <div className="text-center">
            <img src={category3} className="h-[140px]" />
            <h1>پوشاک</h1>
          </div>
        </Link>
        <Link to={"/productListSuperMarket"}>
          <div className="text-center">
            <img src={category4} className="h-[140px]" />
            <h1>کالای سوپرمارکتی</h1>
          </div>
        </Link>
        <Link to={"/productListKitchen"}>
          <div className="text-center">
            <img src={category5} className="h-[140px]" />
            <h1> خانه و آشپزخانه</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
