import React from "react";
import Carousel from "../component/home/Carousel";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import Banner from "../component/home/Banner";
import LatestNews from "../component/home/LatestNews";
import Feature from "../component/home/Feature";
import AnotherProduct from "../component/home/AnotherProduct";
import BestSeller from "../component/home/BestSeller";
import FooterSearch from "../component/home/FooterSearch";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <BestSeller />
      <Banner />
      <Feature />
      <LatestNews />
      <AnotherProduct />
      <FooterSearch />
      <Footer />
    </div>
  );
}
