import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { ThemeCustomContext } from "../../../settings/theme-context";
import "./TitleBox.css";

export default function SubscribeContent(props: any) {
  const { styleE, isMobile } = useContext(ThemeCustomContext);
  return (
    <div
      id={`subscribe-content-step-${props.no}`}
      className={` flex flex-col flex-wrap justify-center items-center rounded-xl  ${props.className}`}
    >
      <Avatar
        src={require(`../../../assets/v3/drawer/${props.image}`)}
        style={{
          width: isMobile ? 160 : 180,
          height: isMobile ? 140 : 165,
        }}
        alt=""
      />
      <div
        className="w-80 h-8 my-4 font-bold"
        style={{ fontSize: styleE.fontSize24 }}
        dangerouslySetInnerHTML={{ __html: props.name }}
      ></div>
      <div
        className="w-80 h-40 mb-0 font-medium italic"
        style={{ fontSize: styleE.fontSize16 }}
        dangerouslySetInnerHTML={{ __html: props.comment }}
      ></div>
    </div>
  );
}
