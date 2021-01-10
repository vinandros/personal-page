import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext/langContext";
import { Transition, SwitchTransition } from "react-transition-group";
import { keyframes } from "@emotion/react";

const EaseIn = keyframes``;

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 6vw;
  margin-top: 3vh;
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
    }
  }};

  @media (min-width: 768px) {
    font-size: 2.5vw;
    font-weight: 800;
    width: 100%;
    margin-top: 10vh;
  }
`;

const TitlebaseStyle = styled.span`
  font-weight: 600;
`;
const Hi = styled(TitlebaseStyle)``;

const Dev = styled(TitlebaseStyle)``;

const Description = styled(TitlebaseStyle)``;

const Welcome = () => {
  const { heroData } = React.useContext(LangContext);
  if (!heroData) return null;
  const { title, titletwo, titlethree } = heroData;
  return (
    <SwitchTransition mode="out-in">
      <Transition key={titletwo} timeout={100}>
        {(state) => (
          <Title state={state}>
            <Hi>{title}</Hi> <br />
            <Dev>{titletwo}</Dev>
            <br />
            <Description>{titlethree}</Description>
            <br />
          </Title>
        )}
      </Transition>
    </SwitchTransition>
  );
};

export default Welcome;
