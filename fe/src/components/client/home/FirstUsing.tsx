import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FirstUsing() {
  const navigate = useNavigate();
  return (
    <div id="firs-use-component" className="container-fuild mx-auto rounded-xl my-4 h-auto py-14">
      <div className="flex-col justify-center items-center text-center">
        <h1 className="tracking-wide font-sans font-extrabold lg:text-4xl sm:text-3xl text-4xl ">
          Use Embroidery now - it's free!
        </h1>
        <p className="text-md md:text-xl pt-8 pb-12 italic text-center ">
          More than 500 sample products to choose from.
          <br /> T-shirts, hoodies, mugs, bags, stickers and more.
        </p>
        <Button
          style={{ width: 144, height: 48 }}
          variant="contained"
          id="basic-button"
          className="rounded-lg"
          aria-haspopup="true"
          onClick={() => navigate("/login")}
        >
          Start it now
        </Button>
      </div>
    </div>
  );
}
