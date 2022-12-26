import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, TextField } from "@mui/material";
import { ThemeCustomContext } from "../../../settings/theme-context";
import TitleBox from "../problem/TitleBox";
import SubscribeContent from "../problem/SubscribeContent";

export default function Subscribe() {
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);

  const init = () => {
    const items = [
      {
        no: "01",
        name: "Jordan Munson",
        comment:
          "This was a complex file that came out a lot better than what other digitizers have supplied me with! Great at extremely detailed designs!",
        image: "avatar_1.png",
        direction: "ltr",
      },
      {
        no: "02",
        name: "Gary Vaynerchuk",
        comment:
          "I loved everything. I uploaded the picture in the morning and had a finished digitized file later that same day. My buyer is satisfied so I am very happy. I highly recommend this service to anyone doing embroidery. Try them for yourself.",
        image: "avatar_2.png",
        direction: isMobile ? "rtl" : "btt",
      },
      {
        no: "03",
        name: "Tina Roth Eisenhower",
        comment:
          "I am a repeat customer of jennadigitizing and they always provide quality work in a timely manner. I would definitely reccommend them to others and use again in the future.",
        image: "avatar_3.png",
        direction: isMobile ? "ltr" : "rtl",
      },
    ];
    const rows = [] as JSX.Element[];
    for (const item of items) {
      rows.push(
        <SubscribeContent
          key={item.no + "-subscribe-box"}
          no={item.no}
          comment={item.comment}
          name={item.name}
          image={item.image}
          direction={item.direction}
          className="col-span-3 md:col-span-1"
        ></SubscribeContent>
      );
    }
    return (
      <div id="advance-component" className="md:py-8 grid grid-cols-3 place-items-center md:gap-0 gap-4">
        {rows}
      </div>
    );
  };

  return (
    <div
      className="text-center pt-0 pb-2"
      style={{ paddingLeft: isMobile ? 0 : 100, paddingRight: isMobile ? 0 : 100 }}
    >
      <TitleBox title={"Review"} subTitle={`Subscribe and don't miss these special offers`}></TitleBox>
      {init()}
      <div className="w-72 flex justify-center items-center">
        <TextField
          /* styles the wrapper */
          sx={{
            backgroundColor: theme.colorMain,
            height: theme.textFieldHeightPrimary,
          }}
          /* styles the input component */
          inputProps={{
            style: {
              height: theme.textFieldHeightPrimary,
              padding: "0 14px",
            },
          }}
          className="my-1"
          fullWidth
          variant="outlined"
          id="emailInputSignUp"
          placeholder="Email Address"
          autoComplete="on"
          type="text"
        />
      </div>
    </div>
  );
}
