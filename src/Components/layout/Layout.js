import React from "react";
import useStyles from "./styles";
import RightSidebar from "../rightSidebar/RightSidebar";
import { Divider } from "@material-ui/core";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import Home from "../../pages/home/Home";

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RightSidebar />
      <Divider orientation={"vertical"} className={classes.divider} />
      <Home />
      <Divider orientation={"vertical"} className={classes.divider} />
      <LeftSidebar />
    </div>
  );
};

export default Layout;
