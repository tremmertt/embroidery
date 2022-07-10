import React from "react";
import Carousel from "../component/home/Carousel";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import Product from "../component/Product/Product";
import Banner from "../component/home/Banner";
import LatestNews from "../component/home/LatestNews";
import Feature from "../component/home/Feature";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Product />
      <Banner />
      <Feature />
      <LatestNews />
      <Footer />
    </div>
  );
}
