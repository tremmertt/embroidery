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
      if (ele) window.scroll({ left: ele.offsetLeft, top: ele.offsetTop - 75, behavior: "smooth" });
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div
      id="home-component"
      className="flex-col flex-wrap justify-center items-center backdrop-blur-md shadow-sm"
      style={{
        backgroundImage: "url(" + require("../../../assets/img/background-4.jpg") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="backdrop-blur-md md:py-8 sm:py-0 bg-black/20">
        {/* <img src={require("../../../assets/img/background-1.jpeg")} style={{ height: 260 }} alt="" /> */}
        <div
          style={{
            color: theme.backgroundMainColor,
          }}
          className="px-2 sm:px-6 md:px-8 my-8 mb-3 leading-8 w-full flex-col justify-center items-center"
        >
          <p className="tracking-wide font-extrabold text-4xl text-center">EMBROIDERY DIGITIZING</p>

          <p
            className="leading-6 py-2 text-ellipsis text-center"
            style={{
              color: "black",
            }}
          >
            {/* <div className="md:w-1/5 text-center">
            <img src="https://i.pinimg.com/736x/11/cc/a2/11cca289bed9ac0dac9f9e88ccc8e952.jpg" alt="" />
          </div> */}
          </p>
          <div
            className="text-center "
            style={{
              paddingTop: "20px",
              color: "black",
            }}
          >
            <p className="tracking-wide font-sans font-semibold text-2xl pb-4"> What you will get? </p>
            <ol className="list-none pl-5 leading-6">
              <li> DST, EMB, PES, CND, EXP, VP3, JEF, HUS, ART files, ... </li>
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
          className="pt-0 pb-4 hidden sm:flex"
          style={{ borderEndStartRadius: "500", borderEndEndRadius: "500" }}
        >
          <p className="text-center py-8 text-md leading-7 ">
            {" "}
            We digitize your logo/images/artwork for cap, hat, t-shirt, jacket-back, left chest, bag, towel or in any
            other size you want for embroidery
            <br /> Highly complex designs may incur an extra charges
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
            <ExpandMoreIcon className="text-3xl" style={{ color: theme.colorMain }} />
          </div>
          <div></div>
        </Box>
      </div>
    </div>
  );
}
