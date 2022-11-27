import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";

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
      className="flex-col flex-wrap justify-center items-center backdrop-blur-md shadow-sm"
      style={{
        backgroundImage: "url(" + require("../../../assets/img/background-7.jpeg") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // height: 200,
      }}
    >
      <div className="backdrop-blur-sm md:py-8 sm:py-0 bg-black/10">
        <div
          style={{
            color: theme.backgroundMainColor,
          }}
          className="px-2 sm:px-6 md:px-8 md:my-8 md:mb-3 my-0 py-7 md:py-0 leading-8 w-full flex-col justify-center items-center"
        >
          <div className="text-center ">
            <span className="md:tracking-widest tracking-wide font-extrabold text-2xl md:text-5xl drop-shadow-2xl">
              EMBROIDERY DIGITIZING
            </span>
          </div>
          <div
            className="text-center "
            style={{
              paddingTop: "20px",
              color: "black",
            }}
          >
            <p className="tracking-wide font-sans font-semibold text-xl md:text-3xl pb-4"> What you will get? </p>
            <ol className="list-none pl-5 leading-6 md:text-md text-sm">
              <li> DST, EMB, PES, PDF, VP3, JEF files, ... </li>
              <li> PDF, JPEG file for preview of the design </li>
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
          className="pt-0 pb-4  sm:flex"
          style={{ borderEndStartRadius: "500", borderEndEndRadius: "500" }}
        >
          <p className="text-center py-8 text-md leading-7 hidden md:block">
            {" "}
            We digitize your logo/images/artwork for cap, hat, t-shirt, jacket-back, left chest, bag, towel or in any
            other size you want for embroidery
            <br /> Highly complex designs may incur an extra charges
          </p>

          <div
            style={{ color: theme.backgroundMainColor, cursor: "pointer" }}
            className="border-2 border-white rounded-full icon-transition-to-purpose-component"
            onClick={() => handleTransitionToPurposeComponent()}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <ExpandMoreIcon className="text-3xl" color="inherit" />
          </div>
        </Box>
      </div>
    </div>
  );
}
