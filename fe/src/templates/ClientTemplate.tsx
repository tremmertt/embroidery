import React, { Fragment, useEffect } from "react";
import Footer from "../component/client/common/Footer";
import Header from "../component/client/common/Header";

const ClientTemplate = (props: any) => {
  const { Component } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <Header />
      <Component />
      <hr className="mt-5" />
      <Footer />
    </Fragment>
  );
};
export default ClientTemplate;
