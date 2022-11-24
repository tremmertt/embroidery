import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ShowRoom() {
  const items = [] as JSX.Element[];
  const images = [
    "../../../assets/img/showcase/sample_1.jpeg",
    "../../../assets/img/showcase/sample_1.jpeg",
    "../../../assets/img/showcase/sample_2.jpeg",
    "../../../assets/img/showcase/sample_3.jpeg",
    "../../../assets/img/showcase/sample_4.jpeg",

    "../../../assets/img/showcase/sample_1.jpeg",
    "../../../assets/img/showcase/sample_1.jpeg",
    "../../../assets/img/showcase/sample_2.jpeg",
    "../../../assets/img/showcase/sample_3.jpeg",
    "../../../assets/img/showcase/sample_4.jpeg",

    "../../../assets/img/showcase/sample_1.jpeg",
    "../../../assets/img/showcase/sample_1.jpeg",
    "../../../assets/img/showcase/sample_2.jpeg",
    "../../../assets/img/showcase/sample_3.jpeg",
    "../../../assets/img/showcase/sample_4.jpeg",
  ];
  for (const i of images) {
    console.log(i);
    const image = require("../../../assets/img/showcase/sample_1.jpeg");
    console.log("image", image);
    items.push(
      <div className="shrink-0" key={`${i}-image-showroom`}>
        <img src={image} style={{ height: 260 }} alt="" />
      </div>
    );
  }

  const loadShowRoom = () => {
    return <div className="flex flex-wrap gap-1 py-3 justify-center text-center gap-4">{items}</div>;
  };
  return (
    <div id="showcase-component" className="container-fuild mx-auto rounded-xl mb-4 mt-0 pt-0 h-auto pb-14">
      <div className="flex-col justify-center items-center text-center">
        <p className="text-xl md:text-3xl font-bold pt-8 pb-6 text-center ">Show Room</p>
        {loadShowRoom()}
      </div>
    </div>
  );
}
