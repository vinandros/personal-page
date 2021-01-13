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
          --bg-color: #212121;
          --text-color: #fff;

          /* others color */
          --quote-bg: #bbbbbb;
          --quote-text-color: #000;
          --paragraph-color: rgb(105, 105, 105);
          --secondary-color: #abf0ad;

          /* --primary-color: #212121;
          --primary-color-light: #484848;
          --primary-color-dark: #000000;
          --secondary-color-light: #fbfffc;
          --secondary-color-dark: #97b498; */
        }
        body {
          background-color: #212121;
          font-family: "Times New Roman", Times, serif;
        }
        ul,
        ol {
          list-style-type: none;
        }
        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
