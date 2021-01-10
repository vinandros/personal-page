import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ThemeContext from "../../../context/themeContext/themeProvider";

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
    font-size: 22px;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
`;

const Transition = styled.div`
  color: var(--text-color);
  transition: color ease-in var(--color-transition);
  @media (min-width: 768px) {
    padding-left: 3px;
  }
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
const Wrapper = styled.div`
  @media (min-width: 768px) {
    padding: 3px;
  }
`;

const ThemeToggle = () => {
  const { dark, toggleDark } = React.useContext(ThemeContext);
  return (
    <Wrapper>
      <Input
        onChange={toggleDark}
        checked={dark}
        type="checkbox"
        name="themeToogle"
        id="themeToogle"
      />
      <Label htmlFor="themeToogle">
        <SwitchTransition mode="out-in">
          <CSSTransition key={dark} timeout={150}>
            {(state) => (
              <Transition state={state}>
                {dark ? (
                  <FontAwesomeIcon icon={faSun} color="#fff" />
                ) : (
                  <FontAwesomeIcon
                    icon={faMoon}
                    color="#000"
                    flip="horizontal"
                  />
                )}
              </Transition>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Label>
    </Wrapper>
  );
};

export default ThemeToggle;
