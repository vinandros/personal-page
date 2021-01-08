import styled from "@emotion/styled";
import React from "react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const HeaderS = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
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
