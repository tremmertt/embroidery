import React, { useContext, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import DefaultButton from "custom/DefaultButton";
import { ThemeCustomContext, useWindowSize } from "settings/theme-context";
import "../problem/TitleBox.css";
import { useNavigate } from "react-router-dom";

export default function StartWithUs() {
  const navigate = useNavigate();
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
      className="container-fluid pl-80 pr-40 my-8"
      id="start-with-us-component"
      style={{
        backgroundImage: "url(" + require("../../../assets/v3/bg/bg_pc_2.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-2 justify-center items-center  md:h-96 h-72 ">
        <div
          style={{
            color: theme.subColor1,
            fontSize: styleE.fontSize42,
            fontWeight: "bold",
          }}
          className={`col-span-1 text-center pt-0 md:pb-4 pb-4 text-center`}
        >
          Get started with us now
          {/*  */}
          {/* ${
            isOnScreen("start-with-us-inquiry") || isShowAlready ? "slide-ltr-active" : "slide-ltr"
          } */}
        </div>
        <div className="col-span-1  flex justify-center items-center h-24">
          <span className="wrap-box-button" onClick={() => navigate("/order")}>
            <DefaultButton
              id="start-with-us-contact"
              type="medium"
              value="Order"
              className={`ml-4 rounded-full shadow-xl box-button-1`}
            ></DefaultButton>
          </span>
        </div>
      </div>
    </div>
  );
}
