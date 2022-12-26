import React, { useContext } from "react";
import { ThemeCustomContext } from "../../../settings/theme-context";
import "./TitleBox.css";
const useTitleBox = (props: any) => {
  const { styleE } = useContext(ThemeCustomContext);

  return (
    <div className={"text-center w-full pt-8 pb-4 font-bold flex flex-col flex-wrap justify-center items-center"}>
      <div
        style={{
          fontSize: styleE.fontSize20,
          lineHeight: "28px",
        }}
        className={props.className}
      >
        <span className="title-box font-black" dangerouslySetInnerHTML={{ __html: props.title }}></span>
      </div>
      <div
        className={props.className}
        style={{ fontSize: styleE.fontSize36 }}
        dangerouslySetInnerHTML={{ __html: props.subTitle }}
      ></div>
    </div>
  );
};

export default useTitleBox;
