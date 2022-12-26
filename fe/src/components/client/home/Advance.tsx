import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";
import TitleBox from "../problem/TitleBox";
import AdvanceContent from "../problem/AdvanceContent";

export default function Advance() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  const init = () => {
    const items = [
      {
        no: "01",
        text: "Our team rates high in customer satisfaction for their friendly expertise.",
        image: "step_1.png",
        direction: "ltr",
      },
      {
        no: "02",
        text: "Any design can be done with the fastest time possible",
        image: "step_2.png",
        direction: isMobile ? "rtl" : "btt",
      },
      {
        no: "03",
        text: "Your design is our driving force and motivation.",
        image: "step_3.png",
        direction: isMobile ? "ltr" : "rtl",
      },
    ];
    const rows = [] as JSX.Element[];
    for (const item of items) {
      rows.push(
        <AdvanceContent
          key={item.no + "-flow-box"}
          no={item.no}
          text={item.text}
          image={item.image}
          direction={item.direction}
          className="col-span-3 md:col-span-1"
        ></AdvanceContent>
      );
    }
    return (
      <div id="advance-component" className="md:py-8 grid grid-cols-3 place-items-center md:gap-0 gap-4">
        {rows}
      </div>
    );
  };

  return (
    <div
      className="text-center pt-0 pb-2"
      style={{ paddingLeft: isMobile ? 0 : 100, paddingRight: isMobile ? 0 : 100 }}
    >
      <TitleBox title={"REASON"} subTitle={`Why you choose us`}></TitleBox>
      {init()}
    </div>
  );
}
