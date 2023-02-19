/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LoginAction from "redux/actions/LoginAction";
import { ThemeCustomContext } from "../../../settings/theme-context";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";

type Anchor = "top" | "left" | "bottom" | "right";

const Header = () => {
  const [isScrollFinished, setIsScrollFinished] = useState(false);
  const { theme, styleE } = useContext(ThemeCustomContext);
  const [anchor, setAnchor] = useState("right" as Anchor);
  const [hover, setIsHover] = useState({ isHover: false, tag: "" as string });
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { customer } = useSelector((state: any) => state.LoginReducer);
  const transToComponent = () => {
    const timeout = setTimeout(() => {
      handleTransitionToPurposeComponent(`${window.location.hash.split("#").join("")}-component`);
      clearTimeout(timeout);
      setIsScrollFinished(true);
    }, 100);
  };

  const isSP = window.innerWidth < 640 ? true : false;
  // if (window.location.hash) transToComponent();
  useEffect(() => {
    if (window.location.hash && !isScrollFinished) transToComponent();
  });

  const handleTransitionToPurposeComponent = (id: string) => {
    if (id === "home-component") window.scrollTo({ left: 0, top: -20, behavior: "smooth" });
    if (id === "contact-component") window.scrollTo({ left: 0, top: -60, behavior: "smooth" });
    else {
      try {
        const ele = document.getElementById(id);
        if (ele)
          window.scroll({
            left: ele.offsetLeft,
            top: isSP ? ele.offsetTop - 40 : ele.offsetTop - 60,
            behavior: "smooth",
          });
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleLogout = () => {
  //   dispatch(LoginAction.logout());
  // };

  const navigationItemsMap = () => {
    const items = [];
    const navigationItems = [
      { name: "Top", link: "/#home", id: "home-component" },
      { name: "Order", link: "/order", id: "order-component" },
      { name: "Contact", link: "/#contact", id: "contact-component" },
      { name: "Showroom", link: "/design", id: "showcase-component" },
      { name: "Inquiry", link: "/inquiry", id: "inquiry-component" },
    ];

    for (const item of navigationItems) {
      const link = item.link;
      items.push(
        <li key={item.name} className="h-full flex items-center justify-center ">
          <Link
            to={link}
            onMouseOver={() => setIsHover({ isHover: true, tag: item.id })}
            onMouseLeave={() => setIsHover({ isHover: false, tag: "" })}
            style={{
              color:
                item.name === "TOP"
                  ? theme.primaryTextColor
                  : item.name === "Order"
                  ? theme.subColor1
                  : hover.isHover && hover.tag === item.id
                  ? theme.primaryTextColor
                  : theme.subColor2,
              fontSize: styleE.fontSize16,
              backgroundColor: item.name === "Order" ? theme.primaryTextColor : "transparent",
            }}
            className=" block m-0 w-24 px-0 py-5 text-center font-semibold text-md text-gray-700"
            aria-current="page"
            onClick={() => handleTransitionToPurposeComponent(item.id)}
          >
            {item.name}
          </Link>
        </li>
      );
    }
    // const navigationButtonItems = [
    //   { name: "Inquiry", link: "/inquiry", id: "inquiry-component", hoverClass: "box-button-1" },
    //   { name: "Order", link: "/order", id: "order-component", hoverClass: "box-button-2" },
    // ];

    // for (const item of navigationButtonItems) {
    //   const link = window.location.pathname === "/" && item.link === "/design" ? "/#showcase" : item.link;
    //   items.push(
    //     <li key={item.name} className="h-full wrap-box-button" onClick={() => navigate(item.link)}>
    //       <DefaultButton
    //         className={`rounded-3xl ${item.hoverClass}`}
    //         type="small"
    //         variant={item.name === "Inquiry" ? "outlined" : "contained"}
    //         value={item.name}
    //       ></DefaultButton>
    //     </li>
    //   );
    // }

    return (
      <ul
        className="flex flex-col justify-center items-center m-0 border-gray-100 md:flex-row md:space-x-7 md:mt-0 md:text-sm md:font-medium md:border-0 lg:text-lg"
        style={{ backgroundColor: theme.primaryBackgroundColor }}
      >
        {items}
      </ul>
    );
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => {
    const navigationItems = [
      { name: "Top", link: "/#home", id: "home-component", icon: <HomeIcon></HomeIcon> },
      { name: "Contact", link: "/#contact", id: "contact-component", icon: <CallIcon></CallIcon> },
      { name: "Showroom", link: "/design", id: "showcase-component", icon: <DesignServicesIcon></DesignServicesIcon> },
      {
        name: "Inquiry",
        link: "/inquiry",
        id: "inquiry-component",
        icon: <ContactSupportSharpIcon></ContactSupportSharpIcon>,
      },
    ];

    // const navigationAuthenItems =
    //   customer && customer.id
    //     ? [{ name: "Logout", link: "#", id: "logout-component", icon: <LogoutIcon></LogoutIcon> }]
    //     : [{ name: "Login", link: "/login", id: "login-component", icon: <LoginIcon></LoginIcon> }];

    return (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        className="flex justify-center items-center"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {customer ? (
          <div>
            <Button
              variant="text"
              id="basic-button"
              disableRipple
              fullWidth
              className="rounded-lg flex items-center "
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              disableElevation
              disableFocusRipple
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 40, height: 40 }} alt={customer.name} src={customer.image} />
            </Button>
            <Divider />
          </div>
        ) : (
          <></>
        )}
        <List>
          {navigationItems.map((item, index) => {
            const link = item.link;
            return (
              <Link to={link} key={`${item.name}-${index}-mobile`}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Divider />
        {/* <List>
          {navigationAuthenItems.map((item, index) => {
            const link = item.link;
            return item.name === "Login" ? (
              <Link to={link} key={`${item.name}-${index}-mobile`}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ) : (
              <ListItem disablePadding onClick={handleLogout} key={`${item.name}-${index}-mobile`}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List> */}
      </Box>
    );
  };

  return (
    <div
      className="sticky shadow-md"
      style={{ top: "0", zIndex: 1000, color: theme.primaryTextColor, backgroundColor: theme.primaryBackgroundColor }}
    >
      <Fragment>
        <div className="mx-auto py-0 overflow-hidden">
          <div className="container flex flex-wrap justify-between items-center mx-auto xl:px-16 md:px-0 px-0">
            <Link className="flex title-font px-2 font-medium items-center text-gray-900 mb-0" to="/">
              <img
                src={require("../../../assets/v3/img/logo256x256.png")}
                style={{ height: isSP ? 30 : 64 }}
                alt="logo"
              ></img>
            </Link>
            <Button
              variant="text"
              id="basic-button"
              disableRipple
              className="rounded-lg w-12 h-12 md:hidden"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              disableElevation
              disableFocusRipple
              aria-expanded={open ? "true" : undefined}
              onClick={toggleDrawer(anchor, true)}
              style={{
                color: theme.primaryTextColor,
              }}
            >
              <MenuIcon fontSize="medium" color="inherit"></MenuIcon>
            </Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
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
