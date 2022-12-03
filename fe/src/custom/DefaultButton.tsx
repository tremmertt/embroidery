import React, { Fragment, useContext, useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import { ThemeCustomContext } from "settings/theme-context";

const useButton = ({
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
}) => {
  const { theme } = useContext(ThemeCustomContext);
  switch (type) {
    case "large":
      width = 216;
      height = 64;
      fontSize = theme.fontSize28;
      break;
    case "medium":
      width = 216;
      height = 64;
      fontSize = theme.fontSize20;
      break;
    case "small":
    default:
      width = 136;
      height = 43;
      fontSize = theme.fontSize16;
      break;
  }

  return (
    <Button
      variant={variant}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      className={className}
      disableElevation
      disableFocusRipple
      style={{
        width: width,
        height: height,
        backgroundColor: variant === "outlined" ? theme.primaryBackgroundColor : theme.primaryTextColor,
        color: variant === "outlined" ? theme.primaryTextColor : theme.primaryBackgroundColor,
        borderColor: theme.primaryTextColor,
        textTransform: "none",
        fontSize: fontSize,
      }}
    >
      {value}
    </Button>
  );
};
export default useButton;
