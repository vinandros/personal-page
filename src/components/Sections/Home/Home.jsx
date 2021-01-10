import styled from "@emotion/styled";
import React from "react";
import Quote from "./Quote";
import Welcome from "./Welcome";

const HomeSection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Link = styled.a`
  /* display: none; */
  align-self: center;
  margin-top: 4rem;
  outline: 2px outset black;
  padding: 0.2rem 1.5rem;
  color: var(--text-color);
  opacity: 0.87;
  @media (min-width: 768px) {
    display: inherit;
  }
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <Welcome />
      <Quote />
      <Link href="#about">Go</Link>
    </HomeSection>
  );
};

export default Home;
