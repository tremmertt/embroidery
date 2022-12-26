import React from "react";
import BannerV3 from "../../components/client/home/BannerV3";
import ProblemBox from "../../components/client/home/ProblemBox";
import Advance from "../../components/client/home/Advance";
import StartWithUs from "../../components/client/home/StartWithUs";
import ContactBox from "../../components/client/home/ContactBox";
import Subscribe from "../../components/client/home/Subscribe";

export default function HomePage() {
  return (
    <div>
      <BannerV3 />
      <ProblemBox />
      <Advance />
      <StartWithUs />
      <ContactBox />
      <Subscribe />
    </div>
  );
}
