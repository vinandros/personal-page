import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext";
import { Transition, SwitchTransition } from "react-transition-group";
import BREAKPOINT from "../../Media";
// import { keyframes } from "@emotion/react";

// const EaseIn = keyframes``;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: clamp(0.8rem, 0.8rem + 2vw, 3rem);
  margin-top: 1rem;
  color: var(--text-color);
  transition: color ease-in var(--color-transition);
  transition: opacity ease-in var(--lang-transition);
  opacity: ${({ state }) => {
    switch (state) {
      case "entering":
        return 0;
      case "entered":
        return 0.87;
      case "exiting":
        return 0.87;
      case "exited":
        return 0;
      default:
        return 1;
    }
  }};
  @media (min-width: ${BREAKPOINT.md}) {
    margin-top: 4rem;
  }
`;

const TitleStyle = styled.span`
  font-weight: 600;
`;

const Dev = styled(TitleStyle)`
  color: var(--secondary-color);
  font-weight: 800;
`;

const Welcome = () => {
  const { home } = React.useContext(LangContext);
  const { title, titletwo, titlethree } = home;
  return (
    <SwitchTransition mode="out-in">
      <Transition key={titletwo} timeout={100}>
        {(state) => (
          <Title state={state}>
            <TitleStyle>{title}</TitleStyle> <br />
            <Dev>{titletwo}</Dev>
            <br />
            <TitleStyle>{titlethree}</TitleStyle>
            <br />
          </Title>
        )}
      </Transition>
    </SwitchTransition>
  );
};

export default Welcome;
