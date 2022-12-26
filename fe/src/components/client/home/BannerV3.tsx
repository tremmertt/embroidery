import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext, useWindowSize } from "../../../settings/theme-context";
import DefaultButton from "../../../custom/DefaultButton";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
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
      className="py-8 flex-col flex-wrap justify-center items-center shadow-sm"
      style={{
        backgroundImage: "url(" + require("../../../assets/v3/bg/bg_pc_1" + (isMobile ? "_mobile.png" : ".png")) + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-52 md:py-8  sm:py-0 grid grid-cols-2">
        <div
          className="md:col-span-1 col-span-2 md:text-left text-center"
          style={{ paddingTop: 74, paddingBottom: 93 }}
        >
          <div>
            <span
              id="project-name-1"
              className={`font-bold ${
                isOnScreen("project-name-1") || isShowAlready ? "slide-ttb-active" : "slide-ttb"
              }`}
              style={{ fontSize: styleE.fontSize96, lineHeight: "28px" }}
            >
              E
              <span className="font-medium" style={{ fontSize: styleE.fontSize72 }}>
                mbroidery
              </span>
            </span>
            <span
              id="project-name-2"
              className={`font-bold ${
                isOnScreen("project-name-2") || isShowAlready ? "slide-ttb-active" : "slide-ttb"
              }`}
              style={{ fontSize: styleE.fontSize96 }}
            >
              D
              <span className="font-medium" style={{ fontSize: styleE.fontSize72 }}>
                igitizing
              </span>
            </span>
            <div
              id="introduction-1"
              className={`md:mt-7 md:mb-3 my-4 ${
                isOnScreen("introduction-1") || isShowAlready ? "slide-rtl-active" : "slide-rtl"
              }`}
            >
              <span
                style={{
                  fontSize: styleE.fontSize20,
                  fontWeight: "normal",
                  lineHeight: "36px",
                }}
              >
                You can digitize just about any piece of artwork or image imaginable to turn it into your own custom
                embroidery design!
              </span>

              <br />
              <span style={{ fontSize: styleE.fontSize20, fontWeight: "normal", lineHeight: "36px" }}>
                Design instantly in just <span style={{ color: theme.primaryTextColor }}>30 minutes</span>{" "}
              </span>
              <span style={{ fontSize: styleE.fontSize20, fontWeight: "normal", lineHeight: "36px" }}>
                with a <span style={{ color: theme.primaryTextColor }}>great price</span>{" "}
              </span>
            </div>
          </div>
          <div className="flex md:justify-start justify-center items-center h-24">
            <span className="wrap-box-button" onClick={() => navigate("/order")}>
              <DefaultButton
                type="small"
                value="Order"
                variant="contained"
                className="rounded-full shadow-xl box-button-2 "
              ></DefaultButton>
            </span>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2"></div>
      </div>
    </div>
  );
}
