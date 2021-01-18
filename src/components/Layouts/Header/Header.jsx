import styled from "@emotion/styled";
import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import BREAKPOINT from "../../Media";

const HeaderS = styled.header`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-top: 3rem;
  }
  margin-bottom: 3rem;
`;

const Header = () => {
  return (
    <HeaderS>
      <Logo />
      <SocialMedia />
    </HeaderS>
  );
};

export default Header;
