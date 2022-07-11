import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../../settings/theme-context";
export default function Sidebar() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  const headers = [
    {
      title: "ADMIN LAYOUT PAGES",
      child: [
        { title: "Dashboard", icon: "fa-tv", path: "/admin" },
        { title: "Profile", icon: "fa-user", path: "/admin/profile" },
        { title: "Settings", icon: "fa-cog", path: "/admin/settings" },
        { title: "Authenticate", icon: "fa-key", path: "/signin" },
      ],
    },
  ];

  const renderSideBar = () => {
    const rows = [];
    for (const i in headers) {
      const r = [];
      for (const j in headers[i].child) {
        r.push(
          <li className="items-center">
            <Link
              className={
                "text-xs uppercase py-3 font-bold block flex flex-row " +
                (window.location.pathname === headers[i].child[j].path
                  ? theme.textColorActiveWithHoverAdmin
                  : theme.textColorInactiveWithHoverAdmin)
              }
              to={headers[i].child[j].path}
            >
              <FontAwesomeIcon icon={headers[i].child[j].icon} className={"text-sm basis-1/6"}></FontAwesomeIcon>
              <span className="mx-3  basis-1/4">{headers[i].child[j].title}</span>
            </Link>
          </li>
        );
      }
      rows.push(
        <>
          <hr className="my-4 md:min-w-full" />
          {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            {headers[i].title}
          </h6> */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">{r}</ul>
        </>
      );
    }
    return rows;
  };

  return (
    <nav
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      className={
        "md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 " +
        theme.dropShadow
      }
    >
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Brand */}
        <Link
          className="md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-thin p-4 px-0 text-lg"
          to="/"
        >
          <span className="font-bold">Embroidery</span> Admin
        </Link>

        <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ">
          {renderSideBar()}
        </div>
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: "none",
          }}
        >
          <FontAwesomeIcon icon={!dark ? "fas fa-moon" : "fas fa-moon"}></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
}
