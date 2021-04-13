import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  rightSidebar: {
    backgroundColor: "white",
    width: "18%",
  },
  leftSidebar: {
    backgroundColor: "white",
    width: "25%",
  },
  mainPart: {
    backgroundColor: " white",
    flex: 1,
  },
  divider: {
    height: "100%",
    width: 1,
    backgroundColor: "#7EBAFE !important",
  },
});

export default useStyles;
