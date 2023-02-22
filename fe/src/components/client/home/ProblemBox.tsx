import React, { useContext } from "react";
import { ThemeCustomContext } from "../../../settings/theme-context";
import ProblemContent from "../problem/ProblemContent";
import TitleBox from "../problem/TitleBox";

export default function ProblemBox() {
  const { isMobile, device } = useContext(ThemeCustomContext);

  const init = () => {
    const items = [
      {
        no: "01",
        question: "Do you have an idea but can't make it happen?",
        answer: "Embroidery digitizing can help solve your situation with the best designs",
        direction: "ltr",
        image: "pic_1.png",
      },
      {
        no: "02",
        question: "Are you worried about the cost of the product?",
        answer: "Don't worry about it. <br/> We offer you the best price in the market.",
        direction: "rtl",
        image: "pic_2.png",
      },
      {
        no: "03",
        question: "Designs are in urgent need. Time is limited.",
        answer: "Within 30 minutes to 1 hour, we will send you the results. Also we will support any subsequent edits",
        direction: "ltr",
        image: "pic_3.png",
      },
    ];
    const rows = [] as any[];
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

  const padding = device === "mobile" ? 20 : device === "tablet" ? 40 : 100;

  return (
    <div
      id="problem-box-component"
      className="text-center w-screen"
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      <div className="flex-col flex-wrap justify-center items-center">
        <TitleBox title={"TROUBLES"} subTitle={"Do you have any problems?"}></TitleBox>
        {init()}
      </div>
    </div>
  );
}
