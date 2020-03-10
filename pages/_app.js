/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from "theme-ui";
// import React from "react";
import App from "next/app";

import theme from "../lib/theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Styled.root>
          <div
            sx={{
              width: "800px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Component {...pageProps} />
          </div>
        </Styled.root>
      </ThemeProvider>
    );
  }
}

export default MyApp;
