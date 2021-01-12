import React from "react";
import { Global, css } from "@emotion/react";
import ThemeContext from "../../context/themeContext/themeProvider";
import OpenSansExtBoldWoff from "../../fonts/open-sans-v18-latin-ext-800.woff";
import OpenSansExtBoldWoff2 from "../../fonts/open-sans-v18-latin-ext-800.woff2";
import OpenSansRegularWoff from "../../fonts/open-sans-v18-latin-ext-regular.woff2";
import OpenSansRegularWoff2 from "../../fonts/open-sans-v18-latin-ext-regular.woff2";

const GlobalStyles = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <Global
      dark={dark}
      styles={css`
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 800;
          src: local(""), url(${OpenSansExtBoldWoff2}) format("woff2"),
            url(${OpenSansExtBoldWoff}) format("woff");
        }
        @font-face {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 600;
          src: local(""), url(${OpenSansRegularWoff2}) format("woff2"),
            url(${OpenSansRegularWoff}) format("woff");
        }
        html {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }
        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        :root {
          --bg-color: ${dark ? "#212121" : "#fff"};
          --text-color: ${dark ? "#fff" : "#000"};

          /* others color */
          --quote-bg: ${dark ? "#bbbbbb" : "#000"};
          --quote-text-color: ${dark ? "#000" : "#fff"};
          --paragraph-color: ${dark ? "white" : "rgb(105, 105, 105)"}

          --primary-color: #212121;
          --primary-color-light: #484848;
          --primary-color-dark: #000000;
          --secondary-color: #abf0ad;
          --secondary-color-light: #fbfffc;
          --secondary-color-dark: #97b498;

          /* transtions delays */
          --lang-transition: 0.5s;
          /* color transitions */
          --color-transition: 0.3s;
        }
        body {
          background-color: ${dark ? "#212121" : "#fff"};
          transition: background-color ease-in 0.3s;
          font-family: "Open Sans";
        }
        ul,
        ol {
          list-style-type: none;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}
    />
  );
};

export default GlobalStyles;
