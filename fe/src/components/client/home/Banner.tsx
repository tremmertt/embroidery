import React from "react";

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
    <div className="mx-auto w-full h-auto py-3 mb-5">
      <div className="bg-red-900 text-white grid grid-cols-2">
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
      </div>
    </div>
  );
}
