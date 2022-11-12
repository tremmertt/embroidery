import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";

export default function Banner() {
  const { theme } = useContext(ThemeCustomContext);
  const [isHover, setIsHover] = useState(false);

  const handleTransitionToPurposeComponent = () => {
    console.log("handleTransitionToPurposeComponent");
    try {
      const ele = document.getElementById("our-purpose-component");
      if (ele) window.scroll({ left: ele.offsetLeft, top: ele.offsetTop, behavior: "smooth" });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div
      id="home-component"
      className="md:py-8 sm:py-0 text-white flex flex-wrap justify-center items-start"
      style={{ backgroundColor: theme.backgroundMainColor }}
    >
      <div className="md:w-1/3 w-full">
        <img src="https://i.pinimg.com/736x/11/cc/a2/11cca289bed9ac0dac9f9e88ccc8e952.jpg" alt="" />
      </div>
      <div className="px-2 sm:px-6 md:px-8 my-8 mb-3 text-white leading-8 md:w-2/5 sm:w-full">
        <p className="tracking-wide font-extrabold text-2xl lg:text-3xl md:text-4xl sm:text-3xl">
          EMBROIDERY DIGITIZING
        </p>
        <p className="leading-6 py-2 text-ellipsis ">
          Expert Embroidery Digitizer is here. <br /> We Convert/Digitize your logos/ images/ artwork into any
          embroidery formats you need for embroidery.
        </p>
        <div style={{ paddingTop: "20px" }}>
          <p className="tracking-wide font-sans font-semibold lg:text-xl sm:text-2xl pb-4"> What you will get? </p>
          <ol className="list-decimal pl-5 leading-6">
            <li> DST, EMB, PES, CND, EXP, VP3, JEF, HUS, ART files, ... </li>
            <li> JPEG file </li>
            <li> PDF file for preview of the design</li>
          </ol>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "200px",
        }}
        className="pt-0 pb-4 hidden sm:flex"
        style={{ borderEndStartRadius: "500", borderEndEndRadius: "500" }}
      >
        <p className="text-center py-8 text-md leading-7 ">
          {" "}
          (*) We digitize your logo/images/artwork for cap ,hat ,t-shirt ,jacket-back, left chest, bag, towel or in any
          other size you want for embroidery
          <br /> (*) Any size digitizing: Highly complex designs may incur an extra charges - message me first if you
          are unsure.
        </p>
        <div
          className="border-2 border-white rounded-full icon-transition-to-purpose-component"
          onClick={() => handleTransitionToPurposeComponent()}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={
            isHover
              ? {
                  cursor: "pointer",
                }
              : {}
          }
        >
          <ExpandMoreIcon className="text-3xl" />
        </div>
        <div></div>
      </Box>
    </div>
  );
}
