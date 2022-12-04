import React, { useContext, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import DefaultButton from "custom/DefaultButton";
import { ThemeCustomContext, useWindowSize } from "settings/theme-context";
import "../problem/TitleBox.css";

export default function StartWithUs() {
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
      className="container-fluid my-8"
      id="start-with-us-component"
      style={{
        backgroundImage: "url(" + require("../../../assets/v2/bg/bg_pc_2.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col flex-wrap justify-center items-center md:h-96 h-72">
        <div
          style={{
            color: theme.subColor1,
            fontSize: styleE.fontSize42,
            fontWeight: "bold",
          }}
          className={`text-center pt-0 md:pb-8 pb-4 ${
            isOnScreen("start-with-us-inquiry") || isShowAlready ? "slide-ttb-active" : "slide-ttb"
          }`}
        >
          Get started with us now
        </div>
        <div className="flex justify-center items-center h-24">
          <DefaultButton
            id="start-with-us-inquiry"
            type="medium"
            value="Inquiry"
            variant="outlined"
            className={`rounded-full shadow-xl box-button-1 `}
          ></DefaultButton>
          <DefaultButton
            id="start-with-us-contact"
            type="medium"
            value="Order"
            variant="contained"
            className={`ml-4 rounded-full shadow-xl box-button-2`}
          ></DefaultButton>
        </div>
      </div>
    </div>
  );
}
