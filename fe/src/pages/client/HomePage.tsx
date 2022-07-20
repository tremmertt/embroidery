import React from "react";
// import Carousel from "../../component/client/home/Carousel";
import Banner from "../../components/client/home/Banner";
import LatestNews from "../../components/client/home/LatestNews";
import Feature from "../../components/client/home/Feature";
import AnotherProduct from "../../components/client/home/AnotherProduct";
import BestSeller from "../../components/client/home/BestSeller";
import FooterSearch from "../../components/client/home/FooterSearch";

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
