import { Divider } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import NewTweet from "./components/NewTweet";
import useStyle from "./styles";

const Home = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header />
      <Divider className={classes.divider} />
      <NewTweet />
    </div>
  );
};

export default Home;
