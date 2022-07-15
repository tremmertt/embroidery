import { Fragment, useContext, useEffect } from "react";
import { Route } from "react-router";
import SideBar from "../component/client/common/Sidebar";
import { ThemeContext } from "../settings/theme-context";

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <SideBar></SideBar>
            <div className="relative md:ml-64" style={{ backgroundColor: theme.backgroundColorMint }}>
              <Component {...propsRoute} />
            </div>
          </Fragment>
        );
      }}
    />
  );
};
