/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React, { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginAction from "redux/actions/LoginAction";
import { ThemeCustomContext } from "../../../settings/theme-context";

const Header = () => {
  const { theme } = useContext(ThemeCustomContext);
  const { customer } = useSelector((state: any) => state.LoginReducer);
  const dispatch = useDispatch();
  const transToComponent = () => {
    const timeout = setTimeout(() => {
      handleTransitionToPurposeComponent(`${window.location.hash.split("#").join("")}-component`);
      clearTimeout(timeout);
    }, 300);
  };

  const isSP = window.innerWidth < 640 ? true : false;
  if (window.location.hash) transToComponent();
  useEffect(() => {
    if (window.location.hash) transToComponent();
  });

  const handleTransitionToPurposeComponent = (id: string) => {
    if (id === "home-component") window.scrollTo({ left: 0, top: -20, behavior: "smooth" });
    else {
      try {
        const ele = document.getElementById(id);
        if (ele)
          window.scroll({
            left: ele.offsetLeft,
            top: isSP ? ele.offsetTop - 40 : ele.offsetTop - 65,
            behavior: "smooth",
          });
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
      { name: "Design", link: "/design", id: "showcase-component" },
      { name: "Login", link: "/login", id: "login-component" },
    ];

    for (const item of navigationItems) {
      if (item.name === "Login" && customer && customer.id) {
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
              <Avatar sx={{ width: 34, height: 34 }} alt={customer.name} src={customer.image} />
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
        const link = window.location.pathname === "/" && item.link === "/design" ? "/#showcase" : item.link;
        items.push(
          <li key={item.name} className="h-full">
            <Link
              to={link}
              className="block m-0 p-2 hover:font-normal text-md text-gray-700 hover:text-red-800"
              aria-current="page"
              style={{ color: theme.colorMain }}
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
        className="flex flex-col p-3 m-0 border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 lg:text-lg"
        style={{ backgroundColor: theme.backgroundMainColor }}
      >
        {items}
      </ul>
    );
  };

  return (
    <div
      className="sticky shadow-md"
      style={{ top: "0", zIndex: 1000, color: theme.color, backgroundColor: theme.backgroundMainColor }}
    >
      <Fragment>
        <div className="mx-auto py-0 overflow-hidden">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link className="flex title-font px-2 font-medium items-center text-gray-900 mb-0" to="/">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="md:w-10 md:h-10 w-6 h-6 text-white md:p-2 p-1 bg-red-600 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg> */}

              <img
                src={require("../../../assets/img/logo.png")}
                style={{ height: isSP ? 30 : 36 }}
                className="rounded-3xl"
                alt="logo"
              ></img>
              <span
                className="ml-3 md:text-xl text-lg font-bold"
                style={{
                  color: theme.colorMain,
                }}
              >
                Embroidery
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-4 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600"
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
            <div className="hidden w-full md:block md:w-auto " id="navbar-default">
              {navigationItemsMap()}
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};
export default Header;
