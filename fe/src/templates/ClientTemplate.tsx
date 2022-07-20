import React, { Fragment, useEffect } from "react";
import Footer from "../components/client/common/Footer";
import Header from "../components/client/common/Header";

const ClientTemplate = (props: any) => {
  const { Component } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <Header />
      ``
      <Component />
      <hr className="mt-5" />
      <Footer />
    </Fragment>
  );
};
export default ClientTemplate;
