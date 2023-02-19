import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ThemeCustomContext } from "settings/theme-context";
import "./ShowCaseFinally.css";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const CustomZoomContent = ({
  buttonUnzoom, // default unzoom button
  modalState, // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
  img, // your image, prepped for zooming
}: //onUnzoom,   // unused here, but a callback to manually unzoom the image and
//   close the modal if you want to use your own buttons or
//   listeners in your custom experience
{
  buttonUnzoom: any;
  modalState: any;
  img: any;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useLayoutEffect(() => {
    if (modalState === "LOADED") {
      setIsLoaded(true);
    } else if (modalState === "UNLOADING") {
      setIsLoaded(false);
    }
  }, [modalState]);

  const classCaption = isLoaded ? "zoom-caption zoom-caption--loaded" : "zoom-caption";

  const changeImage = (url: string) => {
    img.ref.current.src = require("../../../" + url);
  };
  return (
    <div>
      {buttonUnzoom}

      <figure>
        {img}
        {/* <img className="image-2" src={require("../../../assets/img/showcase/sample_2.jpeg")} alt="" /> */}
        {/* <figcaption className={classCaption}>
        
        </figcaption> */}
        <ShowCaseFinally classCaption={classCaption} style={{ zIndex: 10000 }} changeImage={changeImage} />
      </figure>
    </div>
  );
};
export default CustomZoomContent;

function ShowCaseFinally(props: any) {
  const [isDisplayImage, setIsDisplayImage] = useState({
    isDisplayImage1: true,
    isDisplayImage2: false,
    isDisplayImage3: false,
  });

  useEffect(() => {
    if (!isDisplayImage.isDisplayImage2) {
      setTimeout(() => {
        setIsDisplayImage({
          isDisplayImage1: true,
          isDisplayImage2: true,
          isDisplayImage3: false,
        });
      }, 500);
    }
    if (!isDisplayImage.isDisplayImage3) {
      setTimeout(() => {
        setIsDisplayImage({
          isDisplayImage1: true,
          isDisplayImage2: true,
          isDisplayImage3: true,
        });
      }, 1000);
    }
  }, [isDisplayImage]);

  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const isSP = window.innerWidth < 640 ? true : false;
  const widthMobile = window.innerWidth / 3;
  const widthDesktop = window.innerHeight / 3;
  return (
    <div className={props.className ? props.className : ""} style={{ position: "absolute", width: "100%", bottom: 0 }}>
      <div
        className="flex-wrap py-3 text-center gap-1"
        style={
          isSP
            ? {
                display: "flex",
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
              }
            : {}
        }
      >
        <div className="" style={{ width: isSP ? widthMobile : widthDesktop }}>
          {isDisplayImage.isDisplayImage1 ? (
            <img
              className="image-1"
              src={require("../../../assets/img/showcase/sample_1.jpeg")}
              style={{
                objectFit: "cover",
                width: isSP ? widthMobile : widthDesktop,
                height: isSP ? widthMobile : widthDesktop,
              }}
              alt=""
              onClick={() => props.changeImage("assets/img/showcase/sample_1.jpeg")}
            />
          ) : (
            <></>
          )}
        </div>

        {/* <div style={{ width: 80 }}>
          <ArrowForwardIosSharpIcon />
        </div> */}
        <div className="" style={{ width: isSP ? widthMobile : widthDesktop }}>
          {isDisplayImage.isDisplayImage2 ? (
            <img
              className="image-2"
              src={require("../../../assets/img/showcase/sample_2.jpeg")}
              style={{
                objectFit: "cover",
                width: isSP ? widthMobile : widthDesktop,
                height: isSP ? widthMobile : widthDesktop,
              }}
              alt=""
              onClick={() => props.changeImage("assets/img/showcase/sample_2.jpeg")}
            />
          ) : (
            <></>
          )}
        </div>
        {/* <div style={{ width: 80 }}>
          <ArrowForwardIosSharpIcon />
        </div> */}
        <div className=" " style={{ width: isSP ? widthMobile : widthDesktop }}>
          {isDisplayImage.isDisplayImage3 ? (
            <img
              className="image-3"
              src={require("../../../assets/img/showcase/sample_3.jpeg")}
              style={{
                objectFit: "cover",
                width: isSP ? widthMobile : widthDesktop,
                height: isSP ? widthMobile : widthDesktop,
              }}
              alt=""
              onClick={() => props.changeImage("assets/img/showcase/sample_3.jpeg")}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
