import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FirstUsing() {
  const navigate = useNavigate();
  return (
    <div id="showcase-component" className="container-fuild mx-auto rounded-xl mb-4 mt-0 pt-0 h-auto pb-14">
      <div className="flex-col justify-center items-center text-center">
        <p className="text-md md:text-xl pt-8 pb-6 italic text-center ">
          And more than 1000 products tailored to your needs
        </p>
        <div className="flex flex-wrap gap-1 py-3 justify-center text-center gap-4">
          <div className="shrink-0">
            <img src={require("../../../assets/img/showcase/sample_1.jpeg")} style={{ height: 260 }} alt="" />
          </div>
          <div className="shrink-0">
            <img src={require("../../../assets/img/showcase/sample_2.jpeg")} style={{ height: 260 }} alt="" />
          </div>
          <div className="shrink-0">
            <img src={require("../../../assets/img/showcase/sample_3.jpeg")} style={{ height: 260 }} alt="" />
          </div>
          <div className="shrink-0">
            <img src={require("../../../assets/img/showcase/sample_4.jpeg")} style={{ height: 260 }} alt="" />
          </div>
          <div className="shrink-0">
            <img src={require("../../../assets/img/showcase/sample_5.jpeg")} style={{ height: 260 }} alt="" />
          </div>
        </div>
        <Button
          style={{ width: 144, height: 48 }}
          variant="contained"
          id="basic-button"
          className="rounded-lg mt-6"
          aria-haspopup="true"
          onClick={() => navigate("/design")}
        >
          See More
        </Button>
      </div>
    </div>
  );
}
