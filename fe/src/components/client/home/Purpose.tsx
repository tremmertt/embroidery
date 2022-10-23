import React from "react";

export default function Purpose() {

  return (
    <div className="container mx-auto h-auto py-28">
      <h1 className="text-red-900 tracking-widest font-sans font-extrabold lg:text-4xl sm:text-2xl pb-4 inline-block justify-center text-center"> OUR PUPOSE</h1>
      
      <div className="grid grid-cols-2">
        <div className="col-span-1 bg-pink-400 px-2"> 
            <h3 className="font-semibold lg:text-2xl sm:text-xl"> Our Embroidery Digitizing service?? </h3>
            <ol className="list-decimal pl-5 leading-8">
                <li> Flat/Regular embroidery digitizing </li>
                <li> 3D Puff/Raised embroidery digitizing </li>
                <li> Patch embroidery digitizing </li>
                <li> Applique and many others type of digitizing </li>
            </ol>
        </div>
        <div className="col-span-1 bg-blue-400"> 
            <img src="../../../assets/img/Group 591.png" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 py-3">
        <div className="col-span-1 bg-purple-400"> 
            <img src="../../../assets/img/Open Peeps Bust.png" alt="" />
        </div>
        <div className="col-span-1 bg-yellow-400 px-2"> 
            <h3 className="font-semibold lg:text-2xl sm:text-xl"> Benefit when using our service </h3>
            <ol className="list-disc pl-5 leading-8">
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
  );
}