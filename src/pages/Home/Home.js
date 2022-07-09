import React from "react";
import CarouselBanner from "../../component/Carousel/CarouselBanner";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Product from "../../component/Product/Product";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselBanner />
      <Product />
      <Footer />
    </div>
  );
}
