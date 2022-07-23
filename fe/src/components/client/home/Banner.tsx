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
    <div className=" relative mx-auto w-full h-auto py-3 mb-5">
      <div className="bg-red-900 text-white">
        <div className="text-left" style={styles.bestOfCollection}>
          <p className="tracking-widest font-sans font-light lg:text-4xl sm:text-5xl">The Best of Collection</p>
          <p style={{ marginTop: "60px", marginBottom: "20px" }}>Performance and Design. Take it right edge</p>
          <p className="hover:underline underline-offset-2 font-semibold text-md"> SHOP NOW</p>
        </div>
      </div>
      <div className="absolute -top-2 right-0 mx-2 h-4/5 w-2/4 bg-slate-400 rounded-lg">Hình ảnh minh họa</div>
    </div>
  );
}
