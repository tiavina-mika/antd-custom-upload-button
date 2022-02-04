import React from "react";
import { ThemeProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import theme from "./styles/theme";
import { GlobalStyles } from "./styles/styles";
import Root from "./Root";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Root />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
