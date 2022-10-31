import React from "react";
import CarouselBanner from "../../components/client/home/Carousel";
import Banner from "../../components/client/home/Banner";
import Purpose from "../../components/client/home/Purpose";
import Contact from "../../components/client/home/Contact";
import Feature from "../../components/client/home/Feature";
import AnotherProduct from "../../components/client/home/AnotherProduct";
import BestSeller from "../../components/client/home/BestSeller";
import FooterSearch from "../../components/client/home/FooterSearch";

export default function HomePage() {
  return (
    <div>
      {/* <CarouselBanner />
      <BestSeller /> */}
      <Banner />
      <Purpose />
      <Contact />
      {/* <Feature />
      <LatestNews />
      <AnotherProduct />
      <FooterSearch /> */}
    </div>
  );
}
