import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import MobileSlider from "./MobileSlider";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Shopping from "./Shopping";

function SlideProductApi() {
  const {
    isLoading,
    data: mobile,
    error,
  } = useQuery({
    queryKey: ["mobile"],
    queryFn: async function () {
      const data = await axios.get(
        "http://localhost:3000/product?category=mobile"
      );
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
    <div>
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
        {mobile?.map((item) => (
          <SwiperSlide>
            <MobileSlider
              Title={item.title}
              Price={item.price}
              Img={item.image}
              key={item?.id}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideProductApi;
