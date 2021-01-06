import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import Logo from "./Logo";

const HeaderS = styled.header`
  padding: 1rem 0;
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
  /* background-color: green; */
  background-color: white;
`;

const Header = () => {
  return (
    <HeaderS>
      <Logo />
      <div
        css={css`
          position: relative;
          height: 2px;
          width: 100px;
          margin-left: 60vw;
          padding: 0;
          background-color: grey;
        `}
      />
    </HeaderS>
  );
};

export default Header;
