import styled from "@emotion/styled";
import React from "react";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";
const OptionsStyles = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 2vw;
`;

const Custom = () => {
  return (
    <OptionsStyles>
      <LangToggle />
      <ThemeToggle />
    </OptionsStyles>
  );
};

export default Custom;
