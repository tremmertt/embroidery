import { Divider } from "@material-ui/core";
import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeCustomContext, useWindowSize } from "../../../settings/theme-context";
import "./TitleBox.css";

export default function SubscribeContent(props: any) {
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
      id={`subscribe-content-step-${props.no}`}
      className={` flex flex-col flex-wrap justify-center items-center rounded-xl  ${props.className}`}
    >
      <Avatar
        src={require(`../../../assets/v3/drawer/${props.image}`)}
        style={{
          width: isMobile ? 200 : 220,
          height: isMobile ? 180 : 195,
        }}
        alt=""
      />
      <div
        className="w-64 h-8 my-4 font-bold"
        style={{ fontSize: styleE.fontSize20 }}
        dangerouslySetInnerHTML={{ __html: props.name }}
      ></div>
      <div
        className="w-64 h-60 mb-4 font-medium italic"
        style={{ fontSize: styleE.fontSize14 }}
        dangerouslySetInnerHTML={{ __html: props.comment }}
      ></div>
    </div>
  );
}
