import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";
import DefaultButton from "../../../custom/DefaultButton";
import ProblemContent from "../problem/ProblemContent";
import TitleBox from "../problem/TitleBox";
import FlowContent from "../problem/FlowContent";

export default function FlowBox() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  const init = () => {
    const items = [
      {
        no: "01",
        text: "Fill in the form we have prepared.<br/> <b>Go to Form</b>",
        image: "step_1.png",
        direction: "ltr",
      },
      {
        no: "02",
        text: "We will confirm your request and send you a confirmation",
        image: "step_2.png",
        direction: isMobile ? "rtl" : "btt",
      },
      {
        no: "03",
        text: "You get the design within <br/> 30 mins > 1 hour",
        image: "step_3.png",
        direction: isMobile ? "ltr" : "rtl",
      },
    ];
    const rows = [] as JSX.Element[];
    for (const item of items) {
      rows.push(
        <FlowContent
          key={item.no + "-flow-box"}
          no={item.no}
          text={item.text}
          image={item.image}
          direction={item.direction}
          className="col-span-3 md:col-span-1"
        ></FlowContent>
      );
    }
    return (
      <div id="flow-component" className="md:py-4 grid grid-cols-3 place-items-center md:gap-0 gap-4">
        {rows}
      </div>
    );
  };

  return (
    <div className="text-center pb-12" style={{ paddingLeft: isMobile ? 0 : 100, paddingRight: isMobile ? 0 : 100 }}>
      <TitleBox
        title={"FLOW"}
        subTitle={`You only need <b style='color: ${theme.primaryTextColor}'>5 minutes</b> <br/> to sign up for our super easy process`}
      ></TitleBox>
      {init()}
    </div>
  );
}
