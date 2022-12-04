import React, { useContext, useState } from "react";
import { ThemeCustomContext, useWindowSize } from "../../../settings/theme-context";
import "./TitleBox.css";

export default function FlowContent(props: any) {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const [width, height] = useWindowSize();
  const [isShowAlready, setIsShowAlready] = useState(false);
  const isOnScreen = (id: string) => {
    const element = document.getElementById(id);
    const rect = element?.getBoundingClientRect();
    if (rect) {
      if (
        rect.top >= 0 &&
        // rect.left >= 0 &&
        rect.bottom <= (height || document.documentElement.clientHeight) /* or $(window).height() */ &&
        // rect.right <= (width || document.documentElement.clientWidth) /* or $(window).width() */
        !isShowAlready
      ) {
        setIsShowAlready(true);
        return true;
      }
    }
    return false;
  };

  return (
    <div
      id={`flow-content-step-${props.no}`}
      className={`text-center flow-content-box flex flex-col justify-center items-center rounded-xl ${
        isOnScreen(`flow-content-step-${props.no}`) || isShowAlready
          ? `slide-${props.direction}-active`
          : `slide-${props.direction}`
      } ${props.className}`}
      style={{
        width: isMobile ? 240 : 300,
        height: isMobile ? 245 : 305,
        backgroundImage: "url(" + require(`../../../assets/v2/drawer/${props.image}`) + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="w-52 font-bold"
        style={{ fontSize: styleE.fontSize20 }}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></div>
    </div>
  );
}
