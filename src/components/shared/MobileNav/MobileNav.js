import React, { useState } from "react";
import "./MobileNav.scss";
import Backdrop from "./Backdrop/Backdrop";
import Toolbar from "./Toolbar/Toolbar";
import Sidebar from "./Sidebar/Sidebar";
const MobileNav = () => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  function showDrawer() {
    setOpenSideDrawer(!openSideDrawer);
  }
  function backdropClickHander() {
    setOpenSideDrawer(false);
  }

  let sideDrawer;
  let backdrop;

  if (openSideDrawer) {
    sideDrawer = <Sidebar click={backdropClickHander} />;
    backdrop = <Backdrop click={backdropClickHander} />;
  }
  return (
    <div className="mobile-nav">
      <Toolbar drawerClickHandler={showDrawer} iconHanlder={openSideDrawer} />
      {sideDrawer}
      {backdrop}
    </div>
  );
};

export default MobileNav;
