import React from "react";

export default function FooterSearch() {
  return (
    <div className=" container mx-auto h-auto py-10">
      <div className="flex justify-center w-full">
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="xs:w-50 md:w-80 block p-4 pl-10 text-sm outline-yellow-400 text-white bg-white rounded-lg border border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-white dark:border-yellow-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
