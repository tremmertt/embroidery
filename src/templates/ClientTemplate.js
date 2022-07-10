import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";

export const ClientTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
