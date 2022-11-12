import React from "react";

export default function LatestNews() {
  const contents = [
    {
      imageURL: (
        <img
          className="h-36 w-36 object-cover object-center mx-auto"
          src="https://cdn-icons-png.flaticon.com/512/3459/3459828.png"
          alt="blog"
        />
      ),
      title: "Fashion Industry",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      imageURL: (
        <img
          className="h-48 w-48 object-cover object-center mx-auto"
          src="https://previews.123rf.com/images/mayrum/mayrum1809/mayrum180900018/109242832-embroidery-vector-icon.jpg"
          alt="blog"
        />
      ),
      title: "Besst Design Tool",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      imageURL: (
        <img
          className="h-36 w-36 object-cover object-center mx-auto"
          src="https://www.printedthreads.com/wp-content/uploads/2017/01/Embroidery-Icon.png"
          alt="blog"
        />
      ),
      title: "Embroidery Community",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  function renderRows() {
    const rows = [] as any[];
    // console.log("Day la for of");
    for (const i in contents) {
      // console.log("ITEM", i);
      rows.push(
        <div className="my-2" key={"latest-news-" + i}>
          <div className="grid grid-cols-2 gap-1">
            <div className="justify-center">{contents[i].imageURL}</div>
            <div className="text-left">
              <p className="text-gray-400 font-light text-sm">01 Jan, 2022</p>
              <p className="text-black font-bold text-2xl my-2">{contents[i].title}</p>
              <p className="text-black text-md pb-3">{contents[i].content}</p>
            </div>
          </div>
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
    <div className="container mx-auto h-auto py-28">
      <h1 className="tracking-widest text-4xl font-semibold mb-20 text-center">LASTEST NEWS</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1">{renderRows()}</div>
    </div>
  );
}
