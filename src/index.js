import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import theme from "./Components/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
