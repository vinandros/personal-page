import styled from "@emotion/styled";
import React from "react";
import { Transition, SwitchTransition } from "react-transition-group";
import LangContext from "../../../context/langContext/langContext";

const CodeQ = styled.code`
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  color: var(--quote-text-color);
  background-color: var(--quote-bg);
  transition: background-color ease-in var(--color-transition);
  transition: color ease-in var(--color-transition);
  margin-top: 5vh;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0;
  font-size: 5vw;
  @media (min-width: 768px) {
    font-size: 1.5vw;
  }
`;

const baseStyleP = styled.p`
  font-size: 5vw;
  @media (min-width: 768px) {
    font-size: 1.5vw;
  }
`;

const Tag = styled(baseStyleP)`
  margin-left: 0.5rem;
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const PText = styled(baseStyleP)`
  margin-left: 1.5rem;
  font-weight: bold;
  @media (min-width: 768px) {
    margin-left: 4rem;
  }
  opacity: 0.8;
  transition: opacity ease-in var(--lang-transition);
  opacity: ${({ state }) => {
    switch (state) {
      case "entering":
        return 0;
      case "entered":
        return 0.8;
      case "exiting":
        return 0.8;
      case "exited":
        return 0;
    }
  }};
`;

const Quote = () => {
  const { heroData } = React.useContext(LangContext);
  if (!heroData) return null;
  const { personalquote } = heroData;
  return (
    <CodeQ>
      <Blockquote>&lt;blockquote&gt;</Blockquote>
      <Tag>&lt;p&gt;</Tag>
      <SwitchTransition mode="out-in">
        <Transition key={personalquote} timeout={100}>
          {(state) => <PText state={state}>“{personalquote}”</PText>}
        </Transition>
      </SwitchTransition>
      <Tag>&lt;/p&gt;</Tag>
      <cite>
        <Tag>&lt;cite&gt; </Tag>
        <PText>Avicii(Tim Bergling)</PText>
        <Tag> &lt;/cite&gt;</Tag>
      </cite>

      <Blockquote>&lt;/blockquote&gt;</Blockquote>
    </CodeQ>
  );
};

export default Quote;
