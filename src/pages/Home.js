import React from "react";
import Carousel from "../component/home/Carousel";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import Product from "../component/product/Product";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Product />
      <Footer />
    </div>
  );
}
