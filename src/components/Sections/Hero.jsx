import styled from "@emotion/styled";
import React from "react";

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background-color: var(--primary-color);
`;

const Hero = () => {
  return <HeroSection id="about"></HeroSection>;
};

export default Hero;
