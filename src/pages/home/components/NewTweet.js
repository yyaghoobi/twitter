import { Grid } from "@material-ui/core";
import React from "react";
import useStyle from "../styles";

const NewTweet = () => {
  const classes = useStyle();

  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img
          src="images/User.png"
          alt="User img"
          className={classes.profTweet}
        />
        <textarea placeholder={"...توییت کن"} className={classes.input} />
      </Grid>
    </div>
  );
};

export default NewTweet;
