import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext/langContext";

const CodeQ = styled.code`
  display: block;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  background-color: var(--quote-bg, #0e0e0e);
  margin-top: 5vh;
  @media (min-width: 768px) {
    width: 100%;
    /* margin: 2vw; */
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
`;

const Quote = () => {
  const { heroData } = React.useContext(LangContext);
  if (!heroData) return null;
  const { personalquote } = heroData;
  return (
    <CodeQ>
      <Blockquote>&lt;blockquote&gt;</Blockquote>
      <Tag>&lt;p&gt;</Tag>
      <PText>“{personalquote}”</PText>
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
