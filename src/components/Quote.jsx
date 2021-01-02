import styled from "@emotion/styled";
import React from "react";
import LangContext from "../context/langContext/langContext";

const CodeQ = styled.code`
  display: block;
  width: 95%;
  margin: 0 auto;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  background-color: var(--quote-bg, #0e0e0e);

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const Blockquote = styled.blockquote`
  margin: 0;
  line-height: 0.2;
  padding: 0;
  @media (min-width: 768px) {
    margin-left: 1rem;
  }
`;

const PTag = styled.p`
  margin-left: 0.5rem;
  line-height: 0.2;
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const CiteTag = styled.p`
  margin-left: 0.5rem;
  line-height: 0.2;
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const PQuote = styled.p`
  margin-left: 1.5rem;
  line-height: 1.3;
  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

const PCite = styled.p`
  margin-left: 1.5rem;
  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

const Quote = () => {
  const {
    heroData: { personalquote },
  } = React.useContext(LangContext);
  console.log(personalquote);
  return (
    <>
      <CodeQ>
        <Blockquote>&lt;blockquote&gt;</Blockquote>
        <PTag>&lt;p&gt;</PTag>
        <PQuote>“{personalquote}”</PQuote>
        <PTag>&lt;/p&gt;</PTag>
        <cite>
          <CiteTag>&lt;cite&gt; </CiteTag>
          <PCite>Avicii(Tim Bergling)</PCite>
          <CiteTag> &lt;/cite&gt;</CiteTag>
        </cite>

        <Blockquote>&lt;/blockquote&gt;</Blockquote>
      </CodeQ>
    </>
  );
};

export default Quote;
