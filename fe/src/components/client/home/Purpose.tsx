import React, { useContext } from "react";
import { ThemeCustomContext } from "settings/theme-context";

export default function Purpose() {
  const { theme } = useContext(ThemeCustomContext);
  return (
    <div className="container text-center mx-auto h-auto md:pt-14 pt-24 " id="our-purpose-component">
      <div className="tracking-wide font-sans font-extrabold lg:text-4xl sm:text-3xl text-4xl ">What is Embroidery</div>

      <p className="text-md md:text-md pt-2 pb-12 italic w-full">
        {" "}
        - We want to bring you the best experience with our services -
      </p>
      <div className="grid grid-cols-2">
        <div
          // style={{ backgroundColor: theme.backgroundColor }}
          className="col-span-1 px-2 text-center flex justify-center items-center flex-col"
        >
          <div className="flex justify-center items-center">
            <div className="w-full">
              <h3 className="font-bold underline underline-offset-4 lg:text-3xl text-left text-2xl">
                01. We support to
              </h3>
              <ol className="list-decimal pl-5 leading-7 py-4 text-left">
                <li>
                  {" "}
                  <b> Flat/Regular</b> embroidery digitizing{" "}
                </li>
                <li>
                  {" "}
                  <b>3D Puff/Raised</b> embroidery digitizing{" "}
                </li>
                <li>
                  {" "}
                  <b>Patch</b> embroidery digitizing{" "}
                </li>
                <li>
                  {" "}
                  <b>And many others type of</b> embroidery digitizing{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className=" col-span-1 flex justify-start pl-12 items-start py-7">
          <img src={require("../../../assets/img/Group 591.png")} style={{ height: 260 }} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 py-12">
        <div className=" hidden col-span-2 sm:col-span-1 sm:flex justify-center items-center py-7">
          <img src={require("../../../assets/img/Open Peeps Bust.png")} alt="" height="200" />
        </div>
        <div
          // style={{ backgroundColor: theme.backgroundColor }}
          className="rounded-lg col-span-2  sm:col-span-1 px-2 text-left flex justify-center items-center flex-col"
        >
          <div className="w-full sm:w-4/5">
            <h3 className="text-center sm:text-left font-bold underline underline-offset-4 lg:text-3xl text-left text-2xl">
              02. Benefit we supply
            </h3>
            <ol className="list-disc pl-5 leading-7 py-4">
              <li> Wilcom Digitizing. </li>
              <li> Highly skilled digitisers. </li>
              <li> Competitive pricing. </li>
              <li> Fast Turnaround. </li>
              <li> 50 logos daily capacity. </li>
              <li> Major formats available. </li>
              <li> Free format conversions. </li>
              <li> Specialist in 3D, PUFF and small lettering. </li>
              <li> Free editing.. will send PDF of every digitized design. </li>
              <li> High level workflow system. </li>
              <li> Online support. </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
