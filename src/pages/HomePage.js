import React from "react";
import Carousel from "../component/home/Carousel";
import Product from "../component/product/Product";
import Banner from "../component/home/Banner";
import LatestNews from "../component/home/LatestNews";
import Feature from "../component/home/Feature";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <Product />
      <Banner />
      <Feature />
      <LatestNews />
    </div>
  );
}
