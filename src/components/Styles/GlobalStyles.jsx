import React from "react";
import { Global, css } from "@emotion/react";
import ThemeContext from "../../context/themeContext/themeProvider";

const GlobalStyles = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <Global
      dark={dark}
      styles={css`
        html {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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

          --primary-color: #212121;
          --primary-color-light: #484848;
          --primary-color-dark: #000000;
          --secondary-color: #c8e6c9;
          --secondary-color-light: #fbfffc;
          --secondary-color-dark: #97b498;

          --text-color-primary: #ffffff;
          --text-color-secondary: #000000;

          /* transtions delays */
          --lang-transition: 0.5s;
          /* color transitions */
          --color-transition: 0.3s;
        }
        body {
          background-color: ${dark ? "#212121" : "#fff"};
          transition: background-color ease-in 0.3s;
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
