import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    width: "25%",
    padding: "1.5rem 2rem",
  },

  profImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
  },

  profText: {
    marginLeft: "0.5rem",
    width: "max-content",
    boxDirection: "ltr",
  },

  tweeterNameParent: {
    marginRight: "0.5rem",
    width: "max-content",
  },

  profName: {
    flex: 1,
  },

  profId: {
    flex: 1,
    fontSize: "0.78rem",
    color: "#A9A9A9",
  },

  tweeterRoot: {
    backgroundColor: "#f5f8fa",
    margin: "2rem 0",
    borderRadius: "2.5rem",
    padding: "11px 24px",
  },

  tweeterTitle: {
    fontSize: "1.1rem !important",
    fontWeight: "600 !important",
    marginBottom: "11px",
  },

  tweeterParent: {
    padding: "10px 0",
  },
});

export default useStyles;
