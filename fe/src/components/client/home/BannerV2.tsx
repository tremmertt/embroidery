import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";
import DefaultButton from "../../../custom/DefaultButton";

export default function Banner() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const [isHover, setIsHover] = useState(false);

  //https://pngtree.com/free-backgrounds-photos/embroidery

  return (
    <div
      id="home-component"
      className="flex-col flex-wrap justify-center items-center shadow-sm"
      style={{
        backgroundImage: "url(" + require("../../../assets/v2/bg/bg_pc_1" + (isMobile ? "_mobile.png" : ".png")) + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // height: 200,
      }}
    >
      <div className="container md:py-8 sm:py-0 grid grid-cols-2">
        <div className="md:col-span-1 col-span-2 flex flex-col-reverse items-center md:flex hidden">
          <div className="rounded-full bg-white p-10 shadow-md m-10">
            <img
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
            <span className="font-bold" style={{ fontSize: styleE.fontSize84, lineHeight: "28px" }}>
              Embroidery
            </span>
            <br />
            <span className="font-light" style={{ fontSize: styleE.fontSize84 }}>
              Digitizing
            </span>
            <br />
            <div className="mt-7 mb-7">
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
          <DefaultButton
            type="medium"
            value="Inquiry"
            variant="outlined"
            className="rounded-full shadow-xl"
          ></DefaultButton>
          <DefaultButton
            type="medium"
            value="Order"
            variant="contained"
            className="ml-4 rounded-full shadow-xl"
          ></DefaultButton>
        </div>
      </div>
    </div>
  );
}
