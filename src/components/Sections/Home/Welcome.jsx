import styled from "@emotion/styled";
import React from "react";
import LangContext from "../../../context/langContext/langContext";

const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 6vw;
  margin-top: 3vh;

  @media (min-width: 768px) {
    font-size: 3vw;
    font-weight: 800;
    width: 100%;
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
    <>
      <Title>
        <Hi>{title}</Hi> <br />
        <Dev>{titletwo}</Dev>
        <br />
        <Description>{titlethree}</Description>
        <br />
      </Title>
    </>
  );
};

export default Welcome;
