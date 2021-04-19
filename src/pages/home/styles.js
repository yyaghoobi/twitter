import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#e6e6e6",
    flex: 1,
  },

  header: {
    padding: 18,
    backgroundColor: "white",
    display: "flex",
  },

  headerTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginRight: "0.5rem",
  },

  divider: {
    backgroundColor: "#7EBAFF",
    filter: "opacity(0.18)",
  },

  newTweet: {
    padding: 18,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },

  profTweet: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
  },

  input: {
    marginRight: "1rem",
  },
});

export default useStyles;
