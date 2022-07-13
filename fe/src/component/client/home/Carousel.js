import React from "react";
import Slider from "react-slick";

export default function CarouselBanner() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="mx-auto h-auto py-1 overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/500/250" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/500/250" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/500/250" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/500/250" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/500/250" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/500/250" alt="" />
        </div>
      </Slider>
    </div>
  );
}
