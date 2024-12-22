import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../features/ProductsContext";

import { MdDeleteForever } from "react-icons/md";

function Shopping({ id, title, price, image }) {
  const { addToCart, cartItems, removeFromCart } = useContext(ProductsContext);
 
  return (
    <div>
      {!cartItems?.filter((row) => row.id === id)[0]?.count ? (
        <button
          className="bg-[#EF4056] text-white py-2 px-10 rounded-lg lg:px-[90px]"
          onClick={() => addToCart(id, title, price, image)}
        >
          افزودن به سبد خرید
        </button>
      ) : (
        <div className="flex flex-col gap-1">
          <p>به سبد خرید شما اضافه شد</p>
          <div className="flex justify-between items-center text-red-500 shadow-xl border px-2 rounded-lg  p-1">
            <button
              className="text-[26px]"
              onClick={() => addToCart(id, title, price, image)}
            >
              +
            </button>
            <h1 className="text-[20px]">
              {cartItems?.filter((row) => row.id === id)[0]?.count}
            </h1>
            <button className="text-[26px]" onClick={() => removeFromCart(id)}>
              {cartItems?.filter((row) => row.id === id)[0]?.count > 1 ? (
                <p>-</p>
              ) : (
                <MdDeleteForever />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shopping;
