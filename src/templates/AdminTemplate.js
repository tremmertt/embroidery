import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";

export const ClientTemplate = (props) => {
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
            <Header {...propsRoute} />

            <Component {...propsRoute} />
            <hr className="mt-5" />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
