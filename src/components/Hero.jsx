import styled from "@emotion/styled";
import React from "react";

const SectionStyles = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--primary-color);
`;

const Hero = () => {
  return (
    <SectionStyles id="about">{/* <p>hero section</p>{" "} */}</SectionStyles>
  );
};

export default Hero;
