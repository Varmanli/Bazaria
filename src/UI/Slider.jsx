import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../images/slider.png";
import slider2 from "../images/slider1.png";
import slider3 from "../images/slider2.png";
import slider4 from "../images/slider3.png";
import slider5 from "../images/slider4.png";
import slider6 from "../images/slider5.png";
import slider7 from "../images/slider6.png";
import slider8 from "../images/slider7.gif";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Slider() {
  
  return (
    <div className="mt-20 cursor-grab">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
