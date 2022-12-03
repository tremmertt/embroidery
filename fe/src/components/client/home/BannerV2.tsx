import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";
import DefaultButton from "../../../custom/DefaultButton";

export default function Banner() {
  const { theme } = useContext(ThemeCustomContext);
  const [isHover, setIsHover] = useState(false);
  const isSP = window.innerWidth < 640 ? true : false;

  const handleTransitionToPurposeComponent = () => {
    console.log("handleTransitionToPurposeComponent");
    try {
      const ele = document.getElementById("our-purpose-component");
      if (ele)
        window.scroll({
          left: ele.offsetLeft,
          top: isSP ? ele.offsetTop - 40 : ele.offsetTop - 60,
          behavior: "smooth",
        });
    } catch (err) {
      console.log("err", err);
    }
  };
  //https://pngtree.com/free-backgrounds-photos/embroidery

  return (
    <div
      id="home-component"
      className="flex-col flex-wrap justify-center items-center shadow-sm"
      style={{
        backgroundImage: "url(" + require("../../../assets/v2/bg/bg_pc_1.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // height: 200,
      }}
    >
      <div className="container md:py-8 sm:py-0 grid grid-cols-2">
        <div className="col-span-1"></div>
        <div className="col-span-1 text-right" style={{ paddingTop: 74, paddingBottom: 93 }}>
          <div>
            <span className="font-bold" style={{ fontSize: 84, lineHeight: "28px" }}>
              Embroidery
            </span>
            <br />
            <span className="font-light" style={{ fontSize: 84 }}>
              Digitizing
            </span>
            <br />
            <div className="mt-7 mb-7">
              <span style={{ fontSize: theme.fontSize24, fontWeight: "normal", lineHeight: "32px" }}>
                Realize design instantly in just <span style={{ color: theme.primaryTextColor }}>30 minutes</span>{" "}
              </span>
              <br />
              <span style={{ fontSize: theme.fontSize24, fontWeight: "normal", lineHeight: "32px" }}>
                With a <span style={{ color: theme.primaryTextColor }}>great price</span>{" "}
              </span>
              <br />
              <span
                style={{
                  fontSize: theme.fontSize24,
                  color: theme.primaryTextColor,
                  fontWeight: "normal",
                  lineHeight: "32px",
                }}
              >
                The process is so simple
              </span>
            </div>
          </div>
          <DefaultButton type="medium" value="Inquiry" variant="outlined" className="rounded-full"></DefaultButton>
          <DefaultButton type="medium" value="Order" variant="contained" className="ml-4 rounded-full"></DefaultButton>
        </div>
      </div>
    </div>
  );
}
