/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeCustomContext } from "../../../settings/theme-context";

const Header = () => {
  const { theme } = useContext(ThemeCustomContext);

  function navigationItemsMap() {
    const items = [];
    const navigationItems = [
      { name: "Home", link: "/" },
      { name: "Our Purpose", link: "/" },
      { name: "Contact", link: "/" },
      { name: "Design", link: "/" },
      { name: "Login", link: "/" },
    ];
    for (const item of navigationItems) {
      items.push(
        <li key={item.name}>
          <Link
            to="#"
            className="block py-2 pr-4 pl-3 hover:font-semibold text-gray-700 hover:text-red-800"
            aria-current="page"
          >
            {item.name}
          </Link>
        </li>
      );
    }

    return (
      <ul
        className="flex flex-col p-4 mt-4 border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 lg:text-lg"
        style={{ color: theme.color, backgroundColor: theme.backgroundColorMint }}
      >
        {items}
      </ul>
    );
  }

  return (
    <div
      className="sticky"
      style={{ top: "0", zIndex: 1000, color: theme.color, backgroundColor: theme.backgroundColorMint }}
    >
      <Fragment>
        <div className="mx-auto py-0 overflow-hidden">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 mb-0" to="#">
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
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              {navigationItemsMap()}
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};
export default Header;
