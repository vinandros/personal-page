import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext";
import Paragraph from "../../Paragraph";

const Wrapper = styled.div`
  margin-top: 1rem;
  line-height: 1.6;
  color: var(--paragraph-color);
`;

const HeroAbout = () => {
  const { hero } = React.useContext(LangContext);
  const { fistParagraph, secondParagraph, thirdParagraph } = hero;
  return (
    <Wrapper>
      <Paragraph>{fistParagraph}</Paragraph>
      <br />
      <Paragraph>{secondParagraph}</Paragraph>
      <br />
      <Paragraph>{thirdParagraph}</Paragraph>
    </Wrapper>
  );
};

export default HeroAbout;
