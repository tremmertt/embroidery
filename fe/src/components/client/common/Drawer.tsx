import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import Brightness7SharpIcon from "@mui/icons-material/Brightness7Sharp";
import FitScreenSharpIcon from "@mui/icons-material/FitScreenSharp";
import SupervisorAccountSharpIcon from "@mui/icons-material/SupervisorAccountSharp";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import DiscountIcon from "@mui/icons-material/Discount";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const drawerWidth = 250;

const openedMixin = (theme: Theme | any): CSSObject => ({
  width: theme.openedWidth,
  height: theme.height,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.backgroundColor,
  color: theme.color,
  border: 0,
});

const closedMixin = (theme: Theme | any): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: theme.backgroundColor,
  color: theme.color,
  border: 0,
  boxShadow: "none",
  boxSizing: "initial",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 35,
  paddingBottom: 35,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  boxShadow: "none",
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  // width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props: { open: boolean; setOpen: Function }) {
  const { open, setOpen } = props;
  const themeSystem = useTheme();
  const { theme, toggle, dark } = React.useContext(ThemeCustomContext);
  const { t } = useTranslation();
  const headers = [
    {
      title: "ADMIN LAYOUT PAGES",
      child: [
        { title: t("dashboard.Dashboard"), icon: <FitScreenSharpIcon />, path: "/admin" },
        { title: t("order.Order"), icon: <BorderColorSharpIcon />, path: "/admin/orders" },
        { title: t("customer.Customer"), icon: <PermIdentitySharpIcon />, path: "/admin/customers" },
        { title: t("staff.Staff"), icon: <SupervisorAccountSharpIcon />, path: "/admin/staffs" },
        { title: t("product.Product"), icon: <InventorySharpIcon />, path: "/admin/products" },
        { title: t("agency.Voucher"), icon: <DiscountIcon />, path: "/admin/agencies" },
        // { title: t("profile.Profile"), icon: <PersonSharpIcon />, path: "/admin/profile" },
        // { title: t("setting.Setting"), icon: <SettingsSuggestSharpIcon />, path: "/admin/setting" },
        // { title: t("auth.Authenticate"), icon: <KeySharpIcon />, path: "/signin" },
      ],
    },
  ];

  // const [isHoverOnToggleIcon, setIsToggleMouseOverIcon] = React.useState(false);
  // const [isHoverOnSidebar, setIsHoverOnSidebar] = React.useState(false);

  return (
    <nav
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        position: "absolute",
        width: open ? drawerWidth : 64,
        height: "100%",
      }}
      className={"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto h-full shadow-lg"}
    >
      <Drawer
        variant="permanent"
        open={open}
        theme={{ ...themeSystem, ...theme, ...{ openedWidth: drawerWidth, height: "100%" } }}
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto h-full"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          position: "absolute",
          width: open ? 256 : 64,
          height: "100vh",
        }}
      >
        <DrawerHeader>
          <IconButton
            onClick={() => setOpen(!open)}
            style={{ color: theme.color, width: 36 }}
            className={"justify-self-center"}
          >
            <MenuIcon />
          </IconButton>
          {open ? (
            <Link
              className="ml-2 md:block text-center text-blueGray-600 inline-block whitespace-nowrap uppercase font-thin text-lg"
              to="/admin"
            >
              <span className="font-bold">Embroidery</span> Admin
            </Link>
          ) : (
            <></>
          )}
        </DrawerHeader>
        <Divider variant="middle" style={{ backgroundColor: theme.color }} />
        <List>
          {headers[0].child.map((child, index) => (
            <Link key={child.title} to={child.path}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>
                      {open ? (
                        <IconButton
                          className={
                            window.location.pathname === child.path
                              ? theme.textColorActiveWithHoverAdmin
                              : theme.textColorInactiveWithoutHoverAdmin
                          }
                        >
                          {" "}
                          {child.icon}
                        </IconButton>
                      ) : (
                        <Tooltip
                          arrow
                          placement="right"
                          title={child.title}
                          className={
                            window.location.pathname === child.path
                              ? theme.textColorActiveWithHoverAdmin
                              : theme.textColorInactiveWithoutHoverAdmin
                          }
                        >
                          <IconButton> {child.icon}</IconButton>
                        </Tooltip>
                      )}
                    </Typography>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <div style={{ lineHeight: "24px" }} className="text-md">
                        {
                          <div
                            className={
                              window.location.pathname === child.path
                                ? theme.textColorActiveWithHoverAdmin
                                : theme.textColorInactiveWithoutHoverAdmin
                            }
                          >
                            {child.title}
                          </div>
                        }
                      </div>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <div className="w-full h-full flex flex-row items-end justify-center pb-4">
          <button
            type="button"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
          >
            {!dark ? <Brightness7SharpIcon /> : <NightsStaySharpIcon />}
          </button>
        </div>
      </Drawer>
    </nav>
  );
}
