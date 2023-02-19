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
  type: "small" | "medium" | "large" | "small-special";
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

  switch (type) {
    case "large":
      width = device === "mobile" ? 140 : 216;
      height = device === "mobile" ? 44 : 64;
      fontSize = styleE.fontSize28;
      break;
    case "medium":
      width = device === "mobile" ? 126 : 216;
      height = device === "mobile" ? 40 : 64;
      fontSize = styleE.fontSize20;
      break;
    case "small-special":
      width = device === "mobile" ? 100 : 180;
      height = device === "mobile" ? 30 : 44;
      fontSize = device === "mobile" ? styleE.fontSize14 : styleE.fontSize16;
      break;
    case "small":
    default:
      width = device === "mobile" ? 120 : 136;
      height = device === "mobile" ? 36 : 43;
      fontSize = device === "mobile" ? styleE.fontSize14 : styleE.fontSize16;
      break;
  }

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
