import styled from "@emotion/styled";
import React from "react";
import Header from "./Header";

const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
`;

const Home = () => {
  return (
    <HomeSection>
      <Header />
    </HomeSection>
  );
};

export default Home;
