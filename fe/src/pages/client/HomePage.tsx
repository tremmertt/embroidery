import React from "react";
// import Carousel from "../../component/client/home/Carousel";
import Banner from "../../component/client/home/Banner";
import LatestNews from "../../component/client/home/LatestNews";
import Feature from "../../component/client/home/Feature";
import AnotherProduct from "../../component/client/home/AnotherProduct";
import BestSeller from "../../component/client/home/BestSeller";
import FooterSearch from "../../component/client/home/FooterSearch";

export default function HomePage() {
  return (
    <div>
      {/* <Carousel /> */}
      <BestSeller />
      <Banner />
      <Feature />
      <LatestNews />
      <AnotherProduct />
      <FooterSearch />
    </div>
  );
}
