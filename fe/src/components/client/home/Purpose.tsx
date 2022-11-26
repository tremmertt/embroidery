import React from "react";

export default function Purpose() {
  const isSP = window.innerWidth < 640 ? true : false;

  return (
    <div className="container text-center mx-auto h-auto md:pt-14 py-6 " id="our-purpose-component">
      <div className="tracking-wide font-sans font-extrabold text-2xl md:text-4xl  ">What is Embroidery</div>
      <p className="text-sm md:text-lg pt-2 md:pb-12 pb-4 italic w-full">
        {" "}
        - We want to bring you the best experience with our services -
      </p>
      <div className="grid grid-cols-2">
        <div
          // style={{ backgroundColor: theme.backgroundColor }}
          className="col-span-2 md:col-span-1 px-2 text-center flex justify-center items-center md:items-end flex-col"
        >
          <div className="flex justify-center items-center md:py-0 pt-3">
            <div className="w-full">
              <div
                style={{ fontSize: isSP ? 80 : 90 }}
                className="md:my-4 my-4 leading-10 md:font-thin font-medium lg:text-3xl tracking-tight text-center md:text-right"
              >
                01.
              </div>
              <ol className="list-none md:text-md text-sm md:leading-7 md:py-4 p-0 text-center md:text-right">
                <li className="my-3 font-bold underline text-xl md:text-3xl ">We support to</li>
                <li className="md:py-0 py-1">
                  <b> Flat/Regular</b> embroidery digitizing
                </li>
                <li className="md:py-0 py-1">
                  <b>3D Puff/Raised</b> embroidery digitizing
                </li>
                <li className="md:py-0 py-1">
                  <b>Patch</b> embroidery digitizing
                </li>
                <li className="md:py-0 py-1">
                  <b>And many others type of</b> embroidery digitizing
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="hidden md:block col-span-2 md:col-span-1 flex justify-start pl-12 items-start py-7">
          <img src={require("../../../assets/img/Group 591.png")} style={{ height: 260 }} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:py-12 py-4">
        <div className="md:col-span-1 col-span-2 flex md:justify-end justify-center items-center py-7">
          <img src={require("../../../assets/img/Open Peeps Bust.png")} alt="" width={isSP ? "200" : "400"} />
        </div>
        <div
          // style={{ backgroundColor: theme.backgroundColor }}
          className="rounded-lg md:col-span-1 col-span-2 px-2 text-left flex justify-center items-center flex-col"
        >
          <div className="w-full sm:w-4/5">
            <div
              style={{ fontSize: isSP ? 80 : 90 }}
              className="md:my-4 my-4 leading-10 md:font-thin font-medium lg:text-3xl tracking-tight text-center md:text-left"
            >
              02.
            </div>
            <ol className="list-none md:text-md text-sm md:leading-7 md:py-4 p-0 text-center md:text-left">
              <li className="my-3 font-bold underline text-xl md:text-3xl"> Benefit we supply </li>
              <li className="md:py-0 py-1"> Wilcome Embroidery Digitizing logo, embroidery design. </li>
              <li className="md:py-0 py-1"> Highly skilled digitisers. </li>
              <li className="md:py-0 py-1"> Competitive pricing. </li>
              <li className="md:py-0 py-1"> 50 logos daily capacity. </li>
              <li className="md:py-0 py-1"> Any type of file convert to dst, jef, pes, emb. </li>
              <li className="md:py-0 py-1"> Specialist in 3D, PUFF and small lettering. </li>
              <li className="md:py-0 py-1"> High level workflow system. </li>
              <li className="md:py-0 py-1"> Free Unlimited Revisions. </li>
              <li className="md:py-0 py-1"> Online support. </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
