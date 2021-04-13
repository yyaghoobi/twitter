import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyle from "./styles";
import { ButtonBase, Grid } from "@material-ui/core";

const hashTags = [
  "#پرچمـدارـجدید",
  "#ویروسـکرونا",
  "#سامسونگ",
  "#هلوـسامر",
  "#‍پرچمـدارـجدید",
  "#ویروسـکرونا",
  "#سامسونگ",
  "#هلوـسامر",
];

const RightSidebar = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item>
          <img src={"images/logo.png"} alt={"logo"} className={classes.logo} />
        </Grid>
        <Grid item>
          <Typography className={classes.logoType}>توییتر فارسی</Typography>
        </Grid>
      </Grid>
      <Typography className={classes.hashTagTitle}>داع ترین هشتگ ها</Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {hashTags.map((item) => (
          <ButtonBase className={classes.hashTagParent}>
            <Grid item container>
              <Typography className={classes.hashtag}>{item}</Typography>
            </Grid>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSidebar;
