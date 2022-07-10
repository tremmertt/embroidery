import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import SideBar from "../component/client/common/Sidebar";

export const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log("Home");
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <SideBar></SideBar>
            <div className="relative md:ml-64 bg-blueGray-100">
              <Component {...propsRoute} />
            </div>
          </Fragment>
        );
      }}
    />
  );
};
