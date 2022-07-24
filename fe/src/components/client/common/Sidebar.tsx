import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeCustomContext } from "../../../settings/theme-context";

import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import SettingsSuggestSharpIcon from "@mui/icons-material/SettingsSuggestSharp";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import Brightness7SharpIcon from "@mui/icons-material/Brightness7Sharp";
import FitScreenSharpIcon from "@mui/icons-material/FitScreenSharp";
import SupervisorAccountSharpIcon from "@mui/icons-material/SupervisorAccountSharp";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import DiscountIcon from "@mui/icons-material/Discount";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { theme, toggle, dark } = useContext(ThemeCustomContext);
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
        { title: t("profile.Profile"), icon: <PersonSharpIcon />, path: "/admin/profile" },
        { title: t("setting.Setting"), icon: <SettingsSuggestSharpIcon />, path: "/admin/setting" },
        { title: t("auth.Authenticate"), icon: <KeySharpIcon />, path: "/signin" },
      ],
    },
  ];

  const renderSideBar = () => {
    const rows = [];
    for (const i in headers) {
      const r = [];
      for (const j in headers[i].child) {
        r.push(
          <li className="items-center justify-center px-2" key={"side-bar-item-" + j}>
            <Link
              className={
                "text-md py-3 block flex flex-row justify-center" +
                (window.location.pathname === headers[i].child[j].path
                  ? theme.textColorActiveWithHoverAdmin
                  : theme.textColorInactiveWithoutHoverAdmin)
              }
              to={headers[i].child[j].path}
            >
              {headers[i].child[j].icon}
              <span
                className={
                  "mx-3 " +
                  (window.location.pathname === headers[i].child[j].path
                    ? theme.textColorActiveWithHoverAdmin
                    : theme.textColorInactiveWithoutHoverAdmin)
                }
                style={{ lineHeight: "24px" }}
              >
                {headers[i].child[j].title}
              </span>
            </Link>
          </li>
        );
      }
      rows.push(
        <div key={"side-bar-" + i}>
          <hr className="my-4 md:min-w-full" />
          {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            {headers[i].title}
          </h6> */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">{r}</ul>
        </div>
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
          {!dark ? <Brightness7SharpIcon /> : <NightsStaySharpIcon />}
        </button>
      </div>
    </nav>
  );
}
