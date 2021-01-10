import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext/langContext";

const Wrapper = styled.div`
  text-align: justify;
  text-justify: inter-word;
  margin-top: 1rem;
  line-height: 1.6;
  color: var(--text-color);
  opacity: 0.87;

  opacity: 0.87;
  @media (min-width: 768px) {
    margin-left: 1.5rem;
    margin-top: 0;
    max-width: 55%;
  }
`;

const HeroAbout = () => {
  const data = React.useContext(LangContext);
  if (!data.heroData) return null;
  const {
    heroData: { about, abouttwo },
  } = data;
  //   console.log(about);
  return (
    <Wrapper>
      <p>{about}</p>
      <br />
      <p>{abouttwo}</p>
    </Wrapper>
  );
};

export default HeroAbout;
