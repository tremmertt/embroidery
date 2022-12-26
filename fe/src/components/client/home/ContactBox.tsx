import React, { useContext } from "react";
import { ThemeCustomContext } from "../../../settings/theme-context";
import TitleBox from "../problem/TitleBox";
import ContactContent from "../problem/ContactContent";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessIcon from "@mui/icons-material/Business";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function ContactBox() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  const init = () => {
    const items = [
      {
        no: "01",
        text: "(+84) 123 456 789",
        image: "step_1.png",
        icon: <HeadsetMicIcon style={{ fontSize: styleE.fontSize48 }}></HeadsetMicIcon>,
      },
      {
        no: "02",
        text: "abc.xyz@gmail.com",
        image: "step_2.png",
        icon: <ForwardToInboxIcon style={{ fontSize: styleE.fontSize48 }}></ForwardToInboxIcon>,
      },
      {
        no: "03",
        text: "123 abc Str, Ward 3 D.10, HCMC, Viet Nam",
        image: "step_3.png",
        icon: <BusinessIcon style={{ fontSize: styleE.fontSize48 }}></BusinessIcon>,
      },
    ];
    const rows = [] as JSX.Element[];
    for (const item of items) {
      rows.push(
        <ContactContent
          key={item.no + "-contact-box"}
          no={item.no}
          text={item.text}
          image={item.image}
          icon={item.icon}
          className="col-span-3 md:col-span-1"
        ></ContactContent>
      );
    }
    return (
      <div
        id="contact-component"
        style={{ paddingLeft: isMobile ? 0 : 180, paddingRight: isMobile ? 0 : 180 }}
        className="md:py-4 grid grid-cols-3 place-items-center md:gap-0 gap-4"
      >
        {rows}
      </div>
    );
  };

  return (
    <div className="text-center md:pt-3 pt-0 mb-12">
      <TitleBox title={"SOLUTION"} subTitle={`We are best solution for you <br/> Contact us now`}></TitleBox>
      {init()}
    </div>
  );
}
