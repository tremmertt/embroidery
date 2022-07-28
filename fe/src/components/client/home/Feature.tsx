import React from "react";

export default function Feature() {
  const contents = [
    {
      imageURL: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
      title: "Free shipping",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      imageURL: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
          />
        </svg>
      ),
      title: "Refund",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      imageURL: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Support",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  function renderRows() {
    const rows = [];
    // console.log("Day la for of");
    for (const i of contents) {
      // console.log("ITEM", i);
      rows.push(
        <div className="text-yellow-500 my-2 lg:text-center sm:text-left">
          <div className="text-3xl text-center inline-block align-middle">{i.imageURL}</div>
          <p className="text-black font-semibold text-2xl my-2">{i.title}</p>
          <p className="text-black text-lg pb-3">{i.content}</p>
        </div>
      );
    }

    // console.log("Day la for in");
    // for (const i in contents) {
    //   console.log("ITEM", i);
    //   rows.push(
    //     <div className="text-yellow-500 justify-center">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         stroke-width="2"
    //       >
    //         <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
    //         />
    //       </svg>
    //       <p className="text-black">{contents[i].title}</p>
    //     </div>
    //   );
    // }
    return rows;
  }
  return (
    <div className="container mx-auto h-auto py-20">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">{renderRows()}</div>
    </div>
  );
}
