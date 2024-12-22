import React from "react";
import Amazing from "../images/Amazings.svg";
import box from "../images/box.png";
import ProductSlider from "./ProductSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import active from "../images/active.png";
import { AmazingProductData } from "../services/AmazingProductData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function SliderProduct() {
  const {
    isLoading,
    data: amazing,
    error,
  } = useQuery({
    queryKey: ["amazing"],
    queryFn: async function () {
      const data = await axios.get("http://localhost:3000/amazing");
      return data.data;
    },
  });
  if (isLoading) {
    return <p>درحال بارگزاری...</p>;
  }
  if (error) {
    return <p>عدم برقراری ارتباط</p>;
  }
  return (
    <div className="text-white flex gap-2 rounded-xl   bg-[#EF3A4F] m-6 p-3">
      <Swiper
        breakpoints={{
          10: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="flex justify-around items-center "
      >
        <SwiperSlide>
          <div className="mx-4 mt-4 flex flex-col justify-center items-center w-[100px] ">
            <img src={Amazing} />
            <img src={box} />
            <button> مشاهده همه</button>
          </div>
        </SwiperSlide>
        {amazing?.map((item) => (
          <SwiperSlide>
            <ProductSlider
              key={item?.id}
              sell={item.price}
              img={item.image}
              pay={item.discount}
              darsad={"15%"}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderProduct;
