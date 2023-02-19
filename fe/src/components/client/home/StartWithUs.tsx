import React, { useContext } from "react";
import DefaultButton from "custom/DefaultButton";
import { ThemeCustomContext } from "settings/theme-context";
import "../problem/TitleBox.css";
import { useNavigate } from "react-router-dom";

export default function StartWithUs() {
  const navigate = useNavigate();
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  return (
    <div
      className="container-fluid my-4 py-2 md:h-96 h-24 w-full"
      id="start-with-us-component"
      style={{
        backgroundImage: "url(" + require("../../../assets/v3/bg/bg_pc_2.png") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: isMobile ? 150 : 400,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          style={{
            color: theme.subColor1,
            fontSize: styleE.fontSize36,
            fontWeight: "bold",
          }}
          className={`text-center`}
        >
          Get started with us now
        </div>
        <div className="flex justify-center items-center h-24">
          <span className="wrap-box-button" onClick={() => navigate("#contact")}>
            <DefaultButton
              id="start-with-us-inquiry"
              type="small-special"
              value="Contact"
              variant="outlined"
              className={`rounded-full shadow-sm box-button-1 `}
            ></DefaultButton>
          </span>
        </div>
      </div>
    </div>
  );
}
