import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext/langContext";
import Paragraph from "../../Paragraph";

const Wrapper = styled.div`
  margin-top: 1rem;
  line-height: 1.6;
  color: var(--paragraph-color);
`;

const HeroAbout = () => {
  const data = React.useContext(LangContext);
  if (!data.heroData) return null;
  const {
    heroData: { about, abouttwo, aboutthree },
  } = data;
  console.log(data);
  return (
    <Wrapper>
      <Paragraph>{about}</Paragraph>
      <br />
      <Paragraph>{abouttwo}</Paragraph>
      <br />
      <Paragraph>{aboutthree}</Paragraph>
    </Wrapper>
  );
};

export default HeroAbout;
