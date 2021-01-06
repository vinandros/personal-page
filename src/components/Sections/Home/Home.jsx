import styled from "@emotion/styled";
import React from "react";
import Custom from "../Header/Custom/Custom";
import Quote from "./Quote";
import Welcome from "./Welcome";

const HomeSection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    /* flex-direction: row; */
  }

  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 171, 255, 1) 75%,
    rgba(0, 0, 0, 1) 100%
  ); */
  /* background-color: white; */
  /* background-color: red; */
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <Welcome />
      <Quote />
      <Custom />
    </HomeSection>
  );
};

export default Home;
