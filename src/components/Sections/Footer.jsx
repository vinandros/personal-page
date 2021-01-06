import styled from "@emotion/styled";
import React from "react";

const FooterSection = styled.section`
  height: 10vh;
  width: 100%;
  background-color: grey;
`;

const Footer = () => {
  return (
    <FooterSection>
      <h1>Footer Section</h1>
    </FooterSection>
  );
};

export default Footer;
