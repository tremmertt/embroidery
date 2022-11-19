import React from "react";
import Banner from "../../components/client/home/Banner";
import Purpose from "../../components/client/home/Purpose";
import Contact from "../../components/client/home/Contact";
import FirstUsing from "../../components/client/home/FirstUsing";
import ShowCase from "../../components/client/home/ShowCase";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Purpose />
      <FirstUsing />
      <Contact />
      <ShowCase />
    </div>
  );
}
