import React from "react";
import BannerV2 from "../../components/client/home/BannerV2";
import ProblemBox from "../../components/client/home/ProblemBox";
import FlowBox from "../../components/client/home/FlowBox";
import StartWithUs from "../../components/client/home/StartWithUs";
import ContactBox from "../../components/client/home/ContactBox";

export default function HomePage() {
  return (
    <div>
      <BannerV2 />
      <ProblemBox />
      <StartWithUs />
      <FlowBox />
      <ContactBox />
    </div>
  );
}
