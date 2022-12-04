import React, { useContext, useEffect, useState } from "react";
import { ThemeCustomContext, useWindowSize } from "../../../settings/theme-context";
import "./TitleBox.css";

export default function ProblemContent(props: any) {
  const { styleE, isMobile } = useContext(ThemeCustomContext);
  const [width, height] = useWindowSize();
  useEffect(() => {}, [width, height]);

  const [isShowAlready, setIsShowAlready] = useState(false);
  const isOnScreen = () => {
    const element = document.getElementById(`problem-box-detail-${props.no}`);
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

  const buildText = () => {
    return isMobile ? (
      <div className={`md:col-span-1 col-span-2 md:py-8 md:px-10 px-9 pt-8 pb-4`}>
        <div className="flex flex-col text-left">
          <div style={{}} className="flex">
            <div className="no-box font-black mr-3" style={{ fontSize: styleE.fontSize60, lineHeight: "50px" }}>
              {props.no}
            </div>
            <div
              style={{ fontSize: styleE.fontSize20 }}
              className="font-bold w-56"
              dangerouslySetInnerHTML={{ __html: props.question }}
            ></div>
          </div>
          <div
            style={{ fontSize: styleE.fontSize16 }}
            className="py-2"
            dangerouslySetInnerHTML={{ __html: props.answer }}
          ></div>
        </div>
      </div>
    ) : (
      <div className="md:col-span-1 col-span-2 md:py-8 md:px-10 px-9">
        <div className="flex flex-col text-left">
          <div style={{ fontSize: styleE.fontSize72 }}>
            <span className="no-box font-black">{props.no}</span>
          </div>
          <div
            style={{ fontSize: styleE.fontSize36 }}
            className="font-bold"
            dangerouslySetInnerHTML={{ __html: props.question }}
          ></div>
          <div
            style={{ fontSize: styleE.fontSize16 }}
            className="py-2"
            dangerouslySetInnerHTML={{ __html: props.answer }}
          ></div>
        </div>
      </div>
    );
  };

  const buildImage = () => {
    return (
      <div
        id={`problem-box-detail-${props.no}`}
        className={`md:col-span-1 col-span-2 md:py-8 py-0 md:px-10 px-9 ${
          isOnScreen() || isShowAlready ? `slide-${props.direction}-active` : `slide-${props.direction}`
        }`}
      >
        <img src={require(`../../../assets/v2/drawer/${props.image}`)} alt={props.question}></img>
      </div>
    );
  };

  return (
    <div className="text-center w-full grid grid-cols-2">
      {props.direction === "ltr" && !isMobile ? (
        <>
          {buildImage()}
          {buildText()}
        </>
      ) : (
        <>
          {buildText()}
          {buildImage()}
        </>
      )}
    </div>
  );
}
