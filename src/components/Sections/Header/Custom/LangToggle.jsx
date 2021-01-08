import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../../../context/themeContext/themeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import LangContext from "../../../../context/langContext/langContext";
import { css } from "@emotion/react";

const Label = styled.label`
  background-color: var(--text-primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  position: relative;

  cursor: pointer;
  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 28px;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const Transition = styled.p`
  font-weight: bold;
  color: var(--text-color);
  transition: color ease-in var(--color-transition);
  opacity: ${({ state }) => {
    switch (state) {
      case "entering":
        return 0;
      case "entered":
        return 1;
      case "exiting":
        return 1;
      case "exited":
        return 0;
    }
  }};
`;
const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding: 3px;
  }
`;

const LangToggle = () => {
  const { lang, toggleLang } = React.useContext(LangContext);
  return (
    <Wrapper>
      <Input
        onChange={toggleLang}
        checked={lang}
        type="checkbox"
        name="langToogle"
        id="langToogle"
      />
      <Label htmlFor="langToogle">
        <SwitchTransition mode="out-in">
          <CSSTransition key={lang} timeout={300}>
            {(state) => (
              <Transition state={state}>
                {lang === "es" ? "en" : "es"}
              </Transition>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Label>
    </Wrapper>
  );
};

export default LangToggle;
