import { Fragment, useContext, useEffect } from "react";
import SideBar from "../components/client/common/Sidebar";
import { ThemeCustomContext } from "../settings/theme-context";

const AdminTemplate = (props: any) => {
  const { Component } = props;
  const { theme } = useContext(ThemeCustomContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <SideBar></SideBar>
      <div className="relative md:ml-64 h-content pb-4" style={{ backgroundColor: theme.backgroundColorMint }}>
        <Component />
      </div>
    </Fragment>
  );
};

export default AdminTemplate;
