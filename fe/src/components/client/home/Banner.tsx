import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/material";

export default function Banner() {
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
    <div className="relative mx-auto w-full h-auto py-3 mb-5">
      <div className="bg-red-900 text-white grid grid-cols-2 pb-5">
        <div className="col-span-1 text-left" style={styles.bestOfCollection}>
          <img className="flex justify-center rounded-md" src="https://i.pinimg.com/736x/11/cc/a2/11cca289bed9ac0dac9f9e88ccc8e952.jpg" alt="" />
          
        </div>
        <div style={{ paddingTop:"100px"}} className="col-span-1 pl-5 text-white leading-8">
          <p className="tracking-widest font-sans font-extrabold lg:text-4xl sm:text-5xl">EMBROIDERY DIGITIZING</p>
          <p className="leading-8" style={{ marginTop: "60px", marginBottom: "20px" }}>Expert Embroidery Digitizer is here. <br/> We Convert/Digitize your logos/images/artwork into any embroidery formats you need for embroidery.</p>
          <div style={{ paddingTop:"60px"}}>
          <p className="tracking-widest font-sans font-semibold lg:text-xl sm:text-2xl pb-4"> What you will get? </p>
          <ol className="list-decimal pl-5 leading-8">
            <li> DST, EMB, PES, CND, EXP, VP3, JEF, HUS, ART files, ... </li>
            <li> JPEG file </li>
            <li> PDF file for preview of the design</li>
          </ol>
          </div>
        </div>
        <Box sx={{ display: 'flex',  flexDirection: 'column',flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center',borderRadius: '200px'  }} className="bg-red-900 text-white">
      
          <p className="text-center text-white text-sm"> * We digitize your logo/images/artwork for cap ,hat ,t-shirt ,jacket-back, left chest, bag, towel or in any other size you want for embroidery
          <br /> * Any size digitizing: Highly complex designs may incur an extra charges - message me first if you are unsure.</p>
          <div className="border-2 border-white rounded-full h-7 w-7 m-1 " > <ExpandMoreIcon className="text-black text-2xl" /> </div>
          <div>

          </div>
          
        </Box>
      </div>
    </div>
  );
}
