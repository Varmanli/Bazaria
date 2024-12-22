import React from "react";
import Category from "../UI/Category";
import Header from "../UI/Header";
import Slider from "../UI/Slider";
import SliderProduct from "../UI/SliderProduct";
import MobileMenu from "../UI/MobileMenu";
import Banner1 from "../UI/Banner1";
import Banner2 from "../UI/Banner2";
import MobileProduct from "../UI/MobileProduct";
import Footer from "../UI/Footer";
import BookSliderProduct from "../UI/BookSliderProduct";

function LandingPage() {
  return (
    <>

      <Slider />
      <Category />
      <SliderProduct />
      <Banner1 />
      <MobileProduct />
      <Banner2 />
      <BookSliderProduct />
    </>
  );
}

export default LandingPage;
