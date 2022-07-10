import React from "react";

export default function AnotherProduct() {
  const contents = [
    {
      imageURL: (
        <img
          className="h-36 w-36 object-cover object-center mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/3459/3459828.png"
          alt="blog"
        />
      ),
      title: "Embroidery Pattern 11",
      price: "$48.06",
      priceSale: "$108.06",
    },
    {
      imageURL: (
        <img
          className="h-36 w-36 object-cover object-center mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/3459/3459828.png"
          alt="blog"
        />
      ),
      title: "Embroidery Pattern 12",
      price: "$48.06",
      priceSale: "$108.06",
    },
    {
      imageURL: (
        <img
          className="h-36 w-36 object-cover object-center mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/3459/3459828.png"
          alt="blog"
        />
      ),
      title: "Embroidery Pattern 13",
      price: "$48.06",
      priceSale: "$108.06",
    },
  ];
  function renderRows() {
    const rows = [];
    for (const i of contents) {
      rows.push(
        <div className="my-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="justify-center">{i.imageURL}</div>
            <div className="text-left">
              <p className="text-black font-bold text-2xl my-2">{i.title}</p>
              <div className="inline-flex pb-2 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="flex">
                <p className="text-red-500 text-lg font-bold pb-3 mr-3">{i.price}</p>
                <p className="text-gray-400 line-through text-md pt-1">{i.priceSale}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return rows;
  }

  return (
    <div className=" container mx-auto h-auto py-20">
      <h1 className="tracking-widest text-4xl font-semibold mb-7">ANOTHER PRODUCTS</h1>
      <div className="grid grid-cols-3">{renderRows()}</div>
    </div>
  );
}
