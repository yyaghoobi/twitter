import React from "react";
import useStyle from "./styles";

const LeftSidebar = () => {
  const classes = useStyle();
  return <div className={classes.root}>left side bar</div>;
};

export default LeftSidebar;
