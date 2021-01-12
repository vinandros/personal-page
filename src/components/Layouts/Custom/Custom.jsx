import styled from "@emotion/styled";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
const OptionsStyles = styled.div`
  position: fixed;
  bottom: 0vh;
  left: 0vw;
  outline: 1px solid var(--text-color);
  box-shadow: -1px -1px 2px var(--text-color);
  opacity: 0.8;
  width: auto;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
