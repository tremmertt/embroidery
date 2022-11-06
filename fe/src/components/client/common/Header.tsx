/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="mx-auto py-2 overflow-hidden">
        {/* <div className="flex flex-wrap justify-between container mx-auto"> */}
          {/* <div className="flex">
            <div className="flex pl-1">
              <h3> EN </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex ml-3">
              <h3> USD </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div> */}
          {/* <div className="flex justify-between">
            {/* <div className="flex mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p> My profile </p>
            </div>
            <div className="flex mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p> Items </p>
            </div>
            <div className="flex mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p> 0.00 </p>
            </div> */}
            {/* <div className="flex mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div> */}
          {/* </div> */}
        {/* </div>  */}
        {/* <header className="text-black body-font border-b-2 shadow-lg">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-red-600 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Logo</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-end font-semibold">
              <Link className="mr-5 hover:text-red-800" to="/">
                Home
              </Link>
              <Link className="mr-5 hover:text-red-800" to="/product">
                Our Purpose
              </Link>
              <Link className="mr-5 hover:text-red-800" to="/product">
                Contact
              </Link>
              <Link className="mr-5 hover:text-red-800" to="/product">
                Design
              </Link>
              <Link className="mr-5 hover:text-red-800" to="/contact">
                Login
              </Link>
              {/* <Link className="mr-5 hover:text-red-800">Home </Link>
            <Link className="mr-5 hover:text-red-800"> Embroidery </Link>
            <Link className="mr-5 hover:text-red-800">Vector </Link>
            <Link className="mr-5 hover:text-red-800">Design </Link>
            <Link className="mr-5 hover:text-red-800">Contact</Link> */}
            {/* </nav> */}
            {/* <div className="flex justify-center">
              <div className=" xl:w-96">
                <div className="input-group relative flex  items-stretch w-full">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn ml-2 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        {/* </header> */}
        
      

    
<nav className="bg-white border-white px-2 sm:px-4 py-2.5 rounded">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-red-600 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Logo</span>
            </Link>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white lg:text-lg">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 hover:font-semibold text-gray-700 hover:text-red-800" aria-current="page">HOME</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-800">OUR PURPOSE</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-800">CONTACT</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-800">DESIGN</a>
        </li>
        <li>
          <a href="/login" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-red-800">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

    </Fragment>
  );
};
export default Header;
