import { ContactMail, Phone } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { ThemeCustomContext, useWindowSize } from "../../../settings/theme-context";
import "./TitleBox.css";

export default function ContactContent(props: any) {
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
      id={`contact-content-${props.no}`}
      className={`bg-white rounded-full text-center md:h-72 md:w-72 w-64 h-64 flex flex-col justify-center items-center ${
        isOnScreen(`contact-content-${props.no}`) || isShowAlready ? "show-slow-active" : "show-slow"
      } ${props.className}`}
    >
      <div>{props.icon}</div>
      <div
        className="pt-3"
        style={{ fontSize: styleE.fontSize20 }}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></div>
    </div>
  );
}
