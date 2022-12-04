import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext, useWindowSize } from "../../../settings/theme-context";
import DefaultButton from "../../../custom/DefaultButton";

export default function Banner() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const [width, height] = useWindowSize();
  const [isShowAlready, setIsShowAlready] = useState(false);
  const isOnScreen = (id: string) => {
    const element = document.getElementById(id);
    const rect = element?.getBoundingClientRect();
    if (rect) {
      if (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (height || document.documentElement.clientHeight) /* or $(window).height() */ &&
        // rect.right <= (width || document.documentElement.clientWidth) /* or $(window).width() */
        !isShowAlready
      ) {
        setIsShowAlready(true);
        return true;
      }
    }
    return false;
  };

  return (
    <div
      id="home-component"
      className="flex-col flex-wrap justify-center items-center shadow-sm"
      style={{
        backgroundImage: "url(" + require("../../../assets/v2/bg/bg_pc_1" + (isMobile ? "_mobile.png" : ".png")) + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container md:py-8 sm:py-0 grid grid-cols-2">
        <div id="pic_1" className="md:col-span-1 col-span-2 flex flex-col-reverse items-center md:flex hidden">
          <div className="rounded-full bg-white p-10 shadow-md m-10">
            <img
              className={`${isOnScreen("pic_1") || isShowAlready ? "slide-ltr-active" : "slide-ltr"}`}
              src={require("../../../assets/v2/drawer/pic_1.png")}
              style={{ height: isMobile ? 30 : 250, width: isMobile ? 30 : 250 }}
              alt="pic_1"
            ></img>
          </div>
        </div>
        <div
          className="md:col-span-1 col-span-2 md:text-right text-center"
          style={{ paddingTop: 74, paddingBottom: 93 }}
        >
          <div>
            <span
              id="project-name-1"
              className={`font-bold ${
                isOnScreen("project-name-1") || isShowAlready ? "slide-ttb-active" : "slide-ttb"
              }`}
              style={{ fontSize: styleE.fontSize84, lineHeight: "28px" }}
            >
              Embroidery
            </span>
            <br />
            <span
              id="project-name-2"
              className={`font-light ${
                isOnScreen("project-name-2") || isShowAlready ? "slide-ttb-active" : "slide-ttb"
              }`}
              style={{ fontSize: styleE.fontSize84 }}
            >
              Digitizing
            </span>
            <br />
            <div
              id="introduction-1"
              className={`md:mt-7 md:mb-7 my-4 ${
                isOnScreen("introduction-1") || isShowAlready ? "slide-rtl-active" : "slide-rtl"
              }`}
            >
              <span style={{ fontSize: styleE.fontSize24, fontWeight: "normal", lineHeight: "36px" }}>
                Realize design instantly in just <span style={{ color: theme.primaryTextColor }}>30 minutes</span>{" "}
              </span>
              <br />
              <span style={{ fontSize: styleE.fontSize24, fontWeight: "normal", lineHeight: "36px" }}>
                With a <span style={{ color: theme.primaryTextColor }}>great price</span>{" "}
              </span>
              <br />
              <span
                style={{
                  fontSize: styleE.fontSize24,
                  color: theme.primaryTextColor,
                  fontWeight: "normal",
                  lineHeight: "36px",
                }}
              >
                The process is so simple
              </span>
            </div>
          </div>
          <div className="flex md:justify-end justify-center items-center h-24">
            <DefaultButton
              type="medium"
              value="Inquiry"
              variant="outlined"
              className="rounded-full shadow-xl box-button-1 "
            ></DefaultButton>
            <DefaultButton
              type="medium"
              value="Order"
              variant="contained"
              className="ml-4 rounded-full shadow-xl box-button-2 "
            ></DefaultButton>
          </div>
        </div>
      </div>
    </div>
  );
}
