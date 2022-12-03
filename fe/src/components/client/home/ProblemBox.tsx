import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";
import DefaultButton from "../../../custom/DefaultButton";
import ProblemContent from "../problem/ProblemContent";
import TitleBox from "../problem/TitleBox";
export default function Banner() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  const init = () => {
    const items = [
      {
        no: "01",
        question: "Do you have an idea but can't make it happen?",
        answer: "Embroidery digitizing can help solve your situation with the best designs",
        direction: "rtl",
        image: "pic_2.png",
      },
      {
        no: "02",
        question: "Are you worried about the cost of the product?",
        answer: "Don't worry about it. <br/> We offer you the best price in the market.",
        direction: "ltr",
        image: "pic_3.png",
      },
      {
        no: "03",
        question: "Designs are in urgent need. Time is limited.",
        answer: "Within 30 minutes to 1 hour, we will send you the results. Also we will support any subsequent edits",
        direction: "rtl",
        image: "pic_4.png",
      },
    ];
    const rows = [];
    for (const item of items) {
      rows.push(
        <ProblemContent
          key={item.no + "-problem-box"}
          no={item.no}
          question={item.question}
          answer={item.answer}
          direction={item.direction}
          image={item.image}
        ></ProblemContent>
      );
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="text-center" style={{ paddingLeft: isMobile ? 0 : 140, paddingRight: isMobile ? 0 : 140 }}>
      <div id="problem-box-component" className="flex-col flex-wrap justify-center items-center shadow-sm">
        <TitleBox title={"TROUBLES"} subTitle={"Do you have any problems?"}></TitleBox>
        {init()}
      </div>
    </div>
  );
}
