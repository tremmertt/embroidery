import React from "react";
import Product from "../../component/client/product/Product";

export default function ProductPage() {
  return (
    <div>
      <div className="bg-slate-200 text-center my-4 h-8">
        <div className="inline-flex ">
          <p className="text-sm text-red-300 mr-2">Home</p>
          <p className="text-sm"> / Hot Deal</p>
        </div>
      </div>
      <div className="grid md:grid-cols-10 sm:grid-cols-2 gap-2 mx-auto">
        <div className="col-span-3 bg-purple-400">hi</div>
        <div className="col-span-7 bg-pink-500">hello</div>
      </div>
    </div>
  );
}
