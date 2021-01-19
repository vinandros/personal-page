import React from "react";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
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
          /* --bg-color: #121212; */
          --bg-color: white;
          /* --text-color: #fff; */
          --text-color: black;

          /* others color */
          --quote-bg: #bbbbbb;
          --quote-text-color: #000;
          --paragraph-color: rgb(146, 146, 146);
          --secondary-color: #abf0ad;
        }
        body {
          background-color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        ul,
        ol {
          list-style-type: none;
        }
        a {
          text-decoration: none;
        }
        a:visited {
          color: black;
        }
        a:link {
          color: black;
        }
      `}
    />
  );
};

export default GlobalStyles;
