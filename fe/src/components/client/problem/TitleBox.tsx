import React, { useContext } from "react";
import { ThemeCustomContext } from "../../../settings/theme-context";
import "./TitleBox.css";
const useTitleBox = (props: any) => {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  return (
    <div className="text-center w-full pt-8 pb-4 font-bold">
      <div
        style={{
          fontSize: styleE.fontSize24,
          lineHeight: "24px",
        }}
      >
        <span className="title-box font-black">{props.title}</span>
      </div>
      <div style={{ fontSize: styleE.fontSize42 }}>{props.subTitle}</div>
    </div>
  );
};

export default useTitleBox;
