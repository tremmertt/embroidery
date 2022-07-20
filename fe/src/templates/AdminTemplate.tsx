import { Fragment, useContext, useEffect } from "react";
import SideBar from "../component/client/common/Sidebar";
import { ThemeContext } from "../settings/theme-context";

const AdminTemplate = (props: any) => {
  const { Component } = props;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <SideBar></SideBar>
      <div className="relative md:ml-64 min-h-screen" style={{ backgroundColor: theme.backgroundColorMint }}>
        <Component />
      </div>
    </Fragment>
  );
};

export default AdminTemplate;
