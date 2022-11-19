/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import SearchParams from "custom/SearchParams";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginAction from "redux/actions/LoginAction";
import LoginService from "service/LoginService";
import { ThemeCustomContext } from "../../../settings/theme-context";

const Header = () => {
  const { theme } = useContext(ThemeCustomContext);
  const { customer } = useSelector((state: any) => state.LoginReducer);
  const dispatch = useDispatch();
  const transToComponent = () => {
    const timeout = setTimeout(() => {
      console.log("12", `${window.location.hash.split("#").join("")}-component`);
      handleTransitionToPurposeComponent(`${window.location.hash.split("#").join("")}-component`);
      clearTimeout(timeout);
    }, 300);
  };
  if (window.location.hash) transToComponent();

  useEffect(() => {
    console.log(window.location.hash);
    if (window.location.hash) transToComponent();
  }, []);

  const handleTransitionToPurposeComponent = (id: string) => {
    if (id === "home-component") window.scrollTo({ left: 0, top: -20, behavior: "smooth" });
    else {
      try {
        const ele = document.getElementById(id);
        if (ele) window.scroll({ left: ele.offsetLeft, top: ele.offsetTop - 75, behavior: "smooth" });
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(LoginAction.logout());
  };

  const navigationItemsMap = () => {
    const items = [];
    const navigationItems = [
      { name: "Home", link: "/#home", id: "home-component" },
      { name: "Our Purpose", link: "/#our-purpose", id: "our-purpose-component" },
      { name: "Contact", link: "/#contact", id: "contact-component" },
      { name: "Design", link: "/#showcase", id: "showcase-component" },
      { name: "Login", link: "/login", id: "login-component" },
    ];

    for (const item of navigationItems) {
      if (item.name === "Login" && customer && customer.id) {
        console.log(customer);
        items.push(
          <li key={item.name}>
            <Button
              variant="text"
              id="basic-button"
              disableRipple
              className="rounded-lg"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              disableElevation
              disableFocusRipple
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar alt={customer.name} src={customer.image} />
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem> */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </li>
        );
      } else {
        items.push(
          <li key={item.name}>
            <Link
              to={item.link}
              className="block py-2 pr-4 pl-3 hover:font-normal text-md text-gray-700 hover:text-red-800"
              aria-current="page"
              onClick={() => handleTransitionToPurposeComponent(item.id)}
            >
              {item.name}
            </Link>
          </li>
        );
      }
    }

    return (
      <ul
        className="flex flex-col p-4 mt-4 border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 lg:text-lg"
        style={{ color: theme.color, backgroundColor: theme.backgroundColorMint }}
      >
        {items}
      </ul>
    );
  };

  return (
    <div
      className="sticky shadow-md"
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
              <span className="ml-3 text-xl font-bold">Embroidery</span>
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
