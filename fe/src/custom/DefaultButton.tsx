import React, { Fragment, useContext, useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import { ThemeCustomContext } from "settings/theme-context";
import "./DefaultButton.css";

const DefaultButton = ({
  type = "medium",
  variant = "outlined",
  width = 216,
  height = 64,
  value = "Default value",
  className = "",
  fontSize = "16px",
  fullWidth = false,
  disableRipple = false,
  disableElevation = false,
  disableFocusRipple = false,
  id = "",
}: {
  type: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  width?: number;
  height?: number;
  value?: string;
  disableRipple?: boolean;
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  fullWidth?: boolean;
  className?: string;
  fontSize?: string;
  id?: string;
}) => {
  const { theme, styleE, device } = useContext(ThemeCustomContext);
  const [hover, setHover] = useState(false);

  switch (type) {
    case "large":
      width = device === "mobile" ? 120 : 216;
      height = device === "mobile" ? 36 : 64;
      fontSize = styleE.fontSize28;
      break;
    case "medium":
      width = device === "mobile" ? 120 : 216;
      height = device === "mobile" ? 36 : 64;
      fontSize = styleE.fontSize20;
      break;
    case "small":
    default:
      width = device === "mobile" ? 120 : 136;
      height = device === "mobile" ? 36 : 43;
      fontSize = styleE.fontSize16;
      break;
  }

  console.log("hover", hover);
  return (
    <button
      id={id}
      // variant={variant}
      // disableRipple={disableRipple}
      // fullWidth={fullWidth}
      // disableElevation
      // disableFocusRipple
      style={{
        width: width,
        height: height,
        // backgroundColor: variant === "outlined" ? theme.primaryBackgroundColor : theme.primaryTextColor,
        // color: variant === "outlined" ? theme.primaryTextColor : theme.primaryBackgroundColor,
        borderColor: theme.primaryTextColor,
        borderWidth: variant === "outlined" ? 1.5 : 0,
        textTransform: "none",
        fontSize: fontSize,
      }}
      className={`${className}`}
    >
      {value}
    </button>
  );
};
export default DefaultButton;
