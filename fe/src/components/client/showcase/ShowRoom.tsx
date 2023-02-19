import React, { useContext, useState } from "react";
import Zoom from "react-medium-image-zoom";
import { ThemeCustomContext } from "settings/theme-context";
import CustomZoomContent from "../../../components/client/home/ShowCaseFinally";
import "components/client/home/ShowCaseFinally.css";

export default function ShowRoom() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const [hover, setIsHover] = useState({ isHover: false, tag: "" });
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
    const heightDesktop = 260;
    const heightMobile = 130;
    const imageTag = (
      <div
        style={{
          backgroundImage: "url(" + require(`../../../assets/img/showcase${fileName}`) + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: isMobile ? heightMobile : heightDesktop,
          width: isMobile ? heightMobile : heightDesktop,
        }}
        className="flex items-center justify-center"
      >
        <img
          className="zoom"
          onMouseOver={() => setIsHover({ isHover: true, tag: i })}
          onMouseLeave={() => setIsHover({ isHover: false, tag: "" })}
          aria-label="That Wanaka Tree, New Zealand by Laura Smetsers"
          src={image}
          style={{
            height: isMobile ? heightMobile * 0.9 : heightDesktop * 0.9,
            width: isMobile ? heightMobile * 0.9 : heightDesktop * 0.9,
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
    );

    items.push(
      <div className="shrink-0 " key={`${i}-image-showroom`}>
        <Zoom ZoomContent={CustomZoomContent}>{imageTag}</Zoom>
      </div>
    );
  }

  const loadShowRoom = () => {
    return <div className="flex flex-wrap py-3 justify-center items-center text-center md:gap-1 gap-0">{items}</div>;
  };

  return (
    <div id="showcase-component" className="container-fuild mx-auto rounded-xl my-4 pt-0 h-auto pb-5">
      <div className="flex-col justify-center items-center text-center">
        <p
          className="text-xl md:text-3xl font-bold md:py-6 pb-3 pt-5 text-center"
          style={{ color: theme.primaryTextColor, fontSize: styleE.fontSize42 }}
        >
          {" "}
          Show Room
        </p>
        {loadShowRoom()}
      </div>
    </div>
  );
}
