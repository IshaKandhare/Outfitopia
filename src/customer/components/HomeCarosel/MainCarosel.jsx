import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainCaroselData } from "./MainCaroselData";
import "react-alice-carousel/lib/alice-carousel.css";
function MainCarosel() {
  const items = MainCaroselData.map((item) => (
    <img
      className="cursor-pointer -z-10"
      role="presentation"
      src={item.image}
      alt=""
    ></img>
  ));
  return (
    <AliceCarousel
    //   mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
}

export default MainCarosel;
