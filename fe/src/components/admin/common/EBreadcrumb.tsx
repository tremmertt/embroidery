import { Button, FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../../../redux/configStore";
import { ThemeCustomContext } from "../../../settings/theme-context";
import { i18n } from "../../../translations/i18n";
import LanguageAction from "../../../redux/actions/LanguageAction";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import AccountMenu from "./AccountMenu";

export default function EBreadcrumb(props: any) {
  const { breadcrumbItems, title } = props;
  const { theme } = useContext(ThemeCustomContext);
  const dispatch = useDispatch();
  const { lang } = useSelector((state: IRootState) => state.LanguageReducer);

  const handleOnChangeLanguage = (e: any) => {
    if (e.target.value) {
      i18n.changeLanguage(e.target.value);
      dispatch(LanguageAction.setLanguage(e.target.value));
    }
    e.preventDefault();
  };

  console.log("language", lang);

  // // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSticky, setIsSticky] = useState(false);
  /* Method that will fix header after a specific scrollable */
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 0) setIsSticky(true);
    else setIsSticky(false);
  };

  const renderElement = () => {
    const rows = [];
    for (const index in breadcrumbItems) {
      rows.push(
        <li className="inline-flex items-center" key={"breadcrumb-" + index}>
          <Link
            to={breadcrumbItems[index].path}
            className={"inline-flex items-center text-sm " + theme.textColorInactiveWithoutHoverAdmin}
          >
            <span className={parseInt(index) === breadcrumbItems.length - 1 ? "font-bold" : "font-thin"}>
              {breadcrumbItems[index].name}
            </span>
            {parseInt(index) === breadcrumbItems.length - 1 ? (
              <></>
            ) : (
              <svg
                className="pl-2 w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
              </svg>
            )}
          </Link>
        </li>
      );
    }

    return (
      <div style={isSticky ? { backdropFilter: "blur(8px)" } : {}}>
        <nav className={"flex flex-row justify-between items-center px-8  pb-0 pt-2"} aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">{rows}</ol>
          <div className="px-8 font-bold text-3xl z-50 pt-2 ">
            <AccountMenu />
          </div>
        </nav>
        <div className="flex flex-row justify-between items-center">
          <div className="px-8 font-bold text-3xl z-50">{title}</div>
        </div>
      </div>
    );
  };

  return <div>{renderElement()}</div>;
}
