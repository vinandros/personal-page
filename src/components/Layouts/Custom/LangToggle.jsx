import React from "react";
import styled from "@emotion/styled";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import LangContext from "../../../context/langContext/langContext";

const Label = styled.label`
  background-color: var(--text-primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  font-size: 14px;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const Transition = styled.p`
  font-weight: 800;
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
      default:
        return 1;
    }
  }};
`;

const LangToggle = () => {
  const { lang, toggleLang } = React.useContext(LangContext);
  return (
    <>
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
    </>
  );
};

export default LangToggle;
