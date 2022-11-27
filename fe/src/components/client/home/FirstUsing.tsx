import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeCustomContext } from "settings/theme-context";

export default function FirstUsing() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeCustomContext);
  return (
    <div
      id="firs-use-component"
      className="container-fuild mx-auto rounded-xl"
      style={{
        backgroundImage: "url(" + require("../../../assets/img/background-5.jpg") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: theme.colorMain,
      }}
    >
      <div className="backdrop-blur-md bg-black/20 flex-col justify-center items-center text-center py-12 h-auto py-20">
        <h1 className="tracking-wide font-sans font-extrabold text-2xl md:text-4xl ">
          Use Embroidery now - it's free!
        </h1>
        <p className="text-sm md:text-lg pt-8 pb-12 text-center ">
          More than 500 sample products to choose from.
          <br /> T-shirts, hoodies, mugs, bags, stickers and more.
        </p>
        <Button
          style={{
            width: theme.buttonWidthPrimary,
            height: theme.buttonHeightPrimary,
            color: theme.colorMain,
            backgroundColor: theme.backgroundMainColor,
          }}
          variant="contained"
          id="basic-button"
          className="rounded-lg font-bold"
          aria-haspopup="true"
          onClick={() => navigate("/login")}
        >
          Start it now
        </Button>
      </div>
    </div>
  );
}
