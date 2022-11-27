import React from "react";
import Zoom from "react-medium-image-zoom";

export default function ShowRoom() {
  const isSP = window.innerWidth < 640 ? true : false;
  const items = [] as JSX.Element[];
  const images = [
    "/sample_1.jpeg",
    "/sample_1.jpeg",
    "/sample_2.jpeg",
    "/sample_3.jpeg",
    "/sample_4.jpeg",

    "/sample_1.jpeg",
    "/sample_1.jpeg",
    "/sample_2.jpeg",
    "/sample_3.jpeg",
    "/sample_4.jpeg",

    "/sample_1.jpeg",
    "/sample_1.jpeg",
    "/sample_2.jpeg",
    "/sample_3.jpeg",
    "/sample_4.jpeg",

    "/sample_1.jpeg",
    "/sample_1.jpeg",
    "/sample_2.jpeg",
    "/sample_3.jpeg",
    "/sample_4.jpeg",

    "/sample_1.jpeg",
    "/sample_1.jpeg",
    "/sample_2.jpeg",
    "/sample_3.jpeg",
    "/sample_4.jpeg",
  ];
  for (const i in images) {
    const fileName = images[i];
    const image = require(`../../../assets/img/showcase${fileName}`);
    items.push(
      <div className="shrink-0" key={`${i}-image-showroom`}>
        <Zoom>
          {" "}
          <img src={image} style={{ height: isSP ? 130 : 260, width: isSP ? 130 : 260 }} alt="" />
        </Zoom>
      </div>
    );
  }

  const loadShowRoom = () => {
    return <div className="flex flex-wrap py-3 justify-center items-center text-center md:gap-1 gap-0">{items}</div>;
  };
  return (
    <div id="showcase-component" className="container-fuild mx-auto rounded-xl my-0 pt-0 h-auto pb-5">
      <div className="flex-col justify-center items-center text-center">
        <p className="text-xl md:text-3xl font-bold md:py-6 pb-3 pt-5 text-center ">Show Room</p>
        {loadShowRoom()}
      </div>
    </div>
  );
}
