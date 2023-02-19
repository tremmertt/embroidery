/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { ThemeCustomContext } from "settings/theme-context";
import React, { useContext, useEffect } from "react";
import "./Common.css";

const Footer = () => {
  const navigate = useNavigate();
  const { theme, styleE, isMobile } = useContext(ThemeCustomContext);
  const transToComponent = () => {
    const timeout = setTimeout(() => {
      handleTransitionToPurposeComponent(`${window.location.hash.split("#").join("")}-component`);
      clearTimeout(timeout);
    }, 300);
  };

  const handleTransitionToPurposeComponent = (id: string) => {
    if (id === "home-component") window.scrollTo({ left: 0, top: -20, behavior: "smooth" });
    else {
      try {
        const ele = document.getElementById(id);
        if (ele)
          window.scroll({
            left: ele.offsetLeft,
            top: isMobile ? ele.offsetTop - 40 : ele.offsetTop - 60,
            behavior: "smooth",
          });
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  if (window.location.hash) transToComponent();

  useEffect(() => {
    if (window.location.hash) transToComponent();
  });

  const buildNavigation = () => {
    const navigationItems = [
      { name: "Top", link: "/#home", id: "home-component" },
      { name: "Contact", link: "/#contact", id: "contact-component" },
      { name: "Showroom", link: "/design", id: "showcase-component" },
      { name: "Inquiry", link: "/inquiry", id: "inquiry-component" },
      // { name: "Order", link: "/order", id: "order-component" },
    ];
    const items = [] as JSX.Element[];
    if (isMobile) {
      const columNum = 3;
      let rows = [] as JSX.Element[];
      for (const index in navigationItems) {
        const trueIndex = parseInt(index) % columNum;
        const item = navigationItems[index];
        rows.push(
          <div key={`${item.name}-footer-item`} className="col-span-1 px-8" onClick={() => navigate(item.link)}>
            {item.name}
          </div>
        );

        if (trueIndex + 1 === columNum || parseInt(index) === navigationItems.length - 1) {
          items.push(
            <div
              key={`${index}-row-footer`}
              className={`grid grid-cols-${
                trueIndex + 1 === columNum ? columNum : trueIndex + 1
              } divide-x text-center pb-2 cursor-pointer`}
            >
              {rows}
            </div>
          );
          rows = [] as JSX.Element[];
        }
      }
      return <div>{items}</div>;
    } else {
      for (const item of navigationItems) {
        items.push(
          <div
            key={`${item.name}-footer-item`}
            className={`col-span-1 px-8 text-center ${item.name === "TOP" ? "font-bold" : ""}`}
            onClick={() => navigate(item.link)}
          >
            {item.name}
          </div>
        );
      }
      return <div className="grid grid-cols-4 divide-x pb-2 cursor-pointer">{items}</div>;
    }
  };

  return (
    <footer
      className="bg-box md:mx-auto shadow-md h-36 flex flex-col justify-center items-center"
      style={{
        color: theme.subColor1,
        fontSize: styleE.fontSize16,
      }}
    >
      {buildNavigation()}
      <div className="text-center pt-3">© Embroidery Digitizing - {new Date().getFullYear()}</div>
    </footer>
  );
};
export default Footer;
