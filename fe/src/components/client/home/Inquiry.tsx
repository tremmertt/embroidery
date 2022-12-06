import { makeStyles, Stack, TextareaAutosize, TextField } from "@mui/material";
import DefaultButton from "custom/DefaultButton";
import React, { useContext, useState } from "react";
import { ThemeCustomContext, useWindowSize } from "settings/theme-context";

import "./Inquiry.css";
import "../problem/TitleBox.css";

const Inquiry = () => {
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
      id="inquiry-component"
      className={`flex justify-center items-center`}
      style={{
        width: "100vw",
        backgroundImage: "url(" + require("../../../assets/v2/bg/bg_pc_4" + (isMobile ? "_mobile.png" : ".png")) + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-4 mb-12 md:my-4 md:px-4 px-4" style={{ width: 800 }}>
        <div className="text-center py-4" style={{ fontSize: styleE.fontSize42, color: theme.primaryTextColor }}>
          <span
            className={`${isOnScreen("title-inquiry-component") || isShowAlready ? "show-slow-active" : "show-slow"}`}
            id="title-inquiry-component"
          >
            Inquiry
          </span>
        </div>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols-5 items-start justify-start gap-4 py-4">
          <div
            style={{ fontSize: styleE.fontSize16 }}
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} col-span-1 font-bold`}
          >
            Name
          </div>
          <TextField
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} md:col-span-3 col-span-4 inputNoneRounded`}
            fullWidth
            required
            size="medium"
            variant="outlined"
            sx={{ input: { color: "gray", backgroundColor: "white" } }}
            placeholder="Please input name ..."
          />
        </div>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols-5 items-start justify-start gap-4 py-4">
          <div
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} col-span-1 font-bold`}
            style={{ fontSize: styleE.fontSize16 }}
          >
            Email
          </div>
          <TextField
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} md:col-span-3 col-span-4 inputNoneRounded`}
            fullWidth
            required
            size="medium"
            variant="outlined"
            sx={{ input: { color: "gray", backgroundColor: "white" } }}
            placeholder="Please input email ..."
          />
        </div>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols-5 items-start justify-start gap-4 py-4">
          <div
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} col-span-1 font-bold`}
            style={{ fontSize: styleE.fontSize16 }}
          >
            Phone Number
          </div>
          <TextField
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} md:col-span-3 col-span-4 inputNoneRounded`}
            fullWidth
            required
            size="medium"
            variant="outlined"
            sx={{ input: { color: "gray", backgroundColor: "white" } }}
            placeholder="Please input phone number ..."
          />
        </div>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols-5 items-start justify-start gap-4 py-4" style={{ width: "100%" }}>
          <div
            className={`${isShowAlready ? "show-slow-active" : "show-slow"} col-span-1 font-bold`}
            style={{ fontSize: styleE.fontSize16 }}
          >
            Contact Content
          </div>
          <div
            className={`${
              isShowAlready ? "show-slow-active" : "show-slow"
            } md:col-span-3 col-span-4 block inputNoneRounded`}
          >
            <TextField
              className="inputNoneRounded"
              placeholder="Please input what you want to contact ..."
              multiline
              fullWidth
              rows={10}
              maxRows={100}
              sx={{
                input: {
                  backgroundColor: "white",
                  color: "gray",
                  border: "#e5e7eb 1px solid",
                  borderRadius: "0px",
                },
              }}
            />
          </div>
        </div>
        <div className="h-24 py-4 text-center">
          <DefaultButton className="rounded-3xl box-button-2" variant="contained" value="Send" type="small" />
        </div>
        {isMobile ? (
          <div className="flex">
            <img
              width={273}
              className="self-center"
              src={require("../../../assets/v2/bg/bg_pc_4_image.png")}
              alt="contact-tag"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Inquiry;
