import { Fragment, useContext, useEffect, useState } from "react";
import SideBar from "../components/client/common/Sidebar";
import Drawer from "../components/client/common/Drawer";
import { ThemeCustomContext } from "../settings/theme-context";

const AdminTemplate = (props: any) => {
  const { Component } = props;
  const { theme } = useContext(ThemeCustomContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div style={{ backgroundColor: theme.backgroundColorMint }} className="relative">
      <Fragment>
        {/* <SideBar></SideBar> */}
        <Drawer open={open} setOpen={setOpen}></Drawer>
        {open ? (
          <div className={"pl-2 h-content md:ml-60 z-500"} style={{ backgroundColor: theme.backgroundColorMint }}>
            <Component />
          </div>
        ) : (
          <div className={"pl-2 h-content md:ml-12 z-500"} style={{ backgroundColor: theme.backgroundColorMint }}>
            <Component />
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default AdminTemplate;
