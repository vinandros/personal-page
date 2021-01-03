import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      css={css`
        background-color: red;
      `}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
