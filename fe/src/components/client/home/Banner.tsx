import React, { useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";

export default function Banner() {
  const { theme } = useContext(ThemeCustomContext);

  const styles = {
    bestOfCollection: {
      marginLeft: "120px",
      paddingBottom: "80px",
      paddingTop: "50px",
    },

    image: {
      width: "100px",
      height: "120px",
    },
  };
  return (
    <div className="relative mx-auto w-full h-auto py-0 mb-5">
      <div
        className="md:py-8 sm:py-0 text-white flex flex-wrap justify-center items-start"
        style={{ backgroundColor: theme.backgroundMainColor }}
      >
        <div className="md:w-1/3 w-full">
          <img src="https://i.pinimg.com/736x/11/cc/a2/11cca289bed9ac0dac9f9e88ccc8e952.jpg" alt="" />
        </div>
        <div className="px-2 sm:px-6 md:px-8 my-8 mb-3 text-white leading-8 md:w-2/5 sm:w-full">
          <p className="tracking-wide font-extrabold lg:text-3xl md:text-4xl sm:text-xl">EMBROIDERY DIGITIZING</p>
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
          style={{}}
          className="bg-red-900 text-white"
        >
          <p className="text-center text-white py-8 text-sm leading-6">
            {" "}
            (*) We digitize your logo/images/artwork for cap ,hat ,t-shirt ,jacket-back, left chest, bag, towel or in
            any other size you want for embroidery
            <br /> (*) Any size digitizing: Highly complex designs may incur an extra charges - message me first if you
            are unsure.
          </p>
          <div className="border-2 border-white rounded-full h-7 w-7 m-1 ">
            {" "}
            <ExpandMoreIcon className="text-black text-2xl" />{" "}
          </div>
          <div></div>
        </Box>
      </div>
    </div>
  );
}
