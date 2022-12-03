import React from "react";
import BannerV2 from "../../components/client/home/BannerV2";
import ProblemBox from "../../components/client/home/ProblemBox";
import Purpose from "../../components/client/home/Purpose";
import Contact from "../../components/client/home/Contact";
import FirstUsing from "../../components/client/home/FirstUsing";
import ShowCase from "../../components/client/home/ShowCase";

export default function HomePage() {
  return (
    <div>
      <BannerV2 />
      <ProblemBox />
      {/* <Purpose />
      <FirstUsing />
      <Contact />
      <ShowCase /> */}
    </div>
  );
}
