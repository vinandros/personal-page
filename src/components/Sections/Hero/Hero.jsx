import styled from "@emotion/styled";

import React from "react";
import HeroImg from "./HeroImg";
import HeroAbout from "./HeroAbout";
import Stack from "./Stack";

const HeroSection = styled.section`
  width: 100%;
  background-color: var(--bg-color);
  transition: background-color ease-in var(--color-transition);
`;

const HeroWrapper = styled.div``;

const Hero = () => {
  return (
    <HeroSection id="about">
      <HeroWrapper>
        <HeroImg />
        <HeroAbout />
      </HeroWrapper>
      <Stack />
    </HeroSection>
  );
};

export default Hero;
