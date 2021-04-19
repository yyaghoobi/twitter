import { ButtonBase, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyle from "./styles";

const Tweeter = ({ name, id, img }) => {
  const classes = useStyle();

  return (
    <ButtonBase>
      <Grid container direction="row" className={classes.tweeterParent}>
        <img src={img} alt={name} className={classes.profImg} resize="cover" />
        <Grid
          item
          container
          direction="column"
          className={classes.tweeterNameParent}
        >
          <Typography className={classes.profName}>{name}</Typography>
          <Typography className={classes.profId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

const tweeter = [
  {
    name: "Xiaomi",
    id: "@Xiaomi",
    img: "images/Xiaomi.png",
  },
  {
    name: "Apple",
    id: "@Apple",
    img: "images/Apple.png",
  },
  {
    name: "بیل گیتس",
    id: "@BillGates",
    img: "images/BillGates.jpeg",
  },
  {
    name: "امیر نظری",
    id: "@Amir_Nazari",
    img: "images/AmirNazari.png",
  },
  {
    name: "مهشید حسنی",
    id: "@Mahshid_Hasani",
    img: "images/MahshidHasani.png",
  },
];

const LeftSidebar = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container direction="row-reverse">
        <img src="images/User.png" alt="user img" className={classes.profImg} />
        <Grid item container direction="column" className={classes.profText}>
          <Typography className={classes.profName}>یسنا یعقوبی </Typography>
          <Typography className={classes.profId}>Yasna.Yaghoobi</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" className={classes.tweeterRoot}>
        <Typography className={classes.tweeterTitle}>
          بهترین خبرنگاران
        </Typography>
        <Divider style={{ marginLeft: -24, marginRight: -24 }} />
        {tweeter.map((item, index) => (
          <>
            <Tweeter name={item.name} id={item.id} img={item.img} />
            {index !== tweeter.length - 1 && (
              <Divider style={{ marginLeft: -24, marginRight: -24 }} />
            )}
          </>
        ))}
      </Grid>
    </div>
  );
};

export default LeftSidebar;
