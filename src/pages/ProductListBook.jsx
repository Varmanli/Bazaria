import React, { useState } from "react";
import { bookData } from "../services/BookData";
import ProductListItem from "../UI/ProductListItem";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function ProductListBook() {
  const {
    isLoading,
    data: books,
    error,
  } = useQuery({
    queryKey: ["book"],
    queryFn: async function () {
      const data = await axios.get(
        "http://localhost:3000/product?category=book"
      );
      return data.data;
    },
  });

  if (isLoading) {
    return (
      <p className="flex justify-center items-center mt-[100px]">
        درحال بارگزاری...
      </p>
    );
  }
  if (error) {
    return <p className="flex justify-center items-center mt-[100px]">عدم برقراری ارتباط</p>;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[70px] mb-[60px] md:mb-0 md:grid md:grid-cols-4">
        {books?.map((item) => (
          <ProductListItem
            title={item.title}
            price={item.price}
            image={item.image}
            key={item.id}
            id={item.id}
          />
        ))}
        {}
      </div>
    </>
  );
}

export default ProductListBook;
