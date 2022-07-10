import React from "react";
import Carousel from "../component/home/Carousel";
import Banner from "../component/home/Banner";
import LatestNews from "../component/home/LatestNews";
import Feature from "../component/home/Feature";
import AnotherProduct from "../component/home/AnotherProduct";
import BestSeller from "../component/home/BestSeller";
import FooterSearch from "../component/home/FooterSearch";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <BestSeller />
      <Banner />
      <Feature />
      <LatestNews />
      <AnotherProduct />
      <FooterSearch />
    </div>
  );
}
