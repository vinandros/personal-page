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
        }
        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        :root {
          --primary-color: #39bbf0;
          --green-complementary: #2ce8b7; //#87E82C #38E8BA
          --secondary-color: #231f20;
          --quote-bg: #0e0e0e;

          --switch-bg: #ecf0f3;
          --switch-primary-sc: #b6b9bb;
          --switch-secondary-sc: #ffffff;
        }
        body {
          background-color: white;
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
