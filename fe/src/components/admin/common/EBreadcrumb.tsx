import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeCustomContext } from "../../../settings/theme-context";

export default function EBreadcrumb(props: any) {
  const { breadcrumbItems, title } = props;
  const { theme } = useContext(ThemeCustomContext);

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
    if (scrollTop >= 10) setIsSticky(true);
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
        <nav className={"flex px-8 pb-2 py-4 " + (isSticky ? " pt-4" : " pt-6")} aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">{rows}</ol>
        </nav>
        <div className="px-8 font-bold text-3xl z-50">{title}</div>
      </div>
    );
  };

  return <div>{renderElement()}</div>;
}
