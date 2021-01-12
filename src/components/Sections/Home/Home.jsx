import styled from "@emotion/styled";
import React from "react";
import Quote from "./Quote";
import Welcome from "./Welcome";
import { Link as LinkGatsby } from "gatsby";

const HomeSection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Link = styled(LinkGatsby)`
  align-self: center;
  margin-top: 6vh;
  outline: 2px outset var(--secondary-color);
  padding: 0.2rem 1.5rem;
  color: var(--bg-color);
  opacity: 0.87;
  font-weight: bold;
  background-color: var(--text-color);
  font-size: clamp(0.5rem, 0.5rem + 1vw, 1rem);
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <Welcome />
      <Quote />
      <Link to="#about" href="#about">
        Go
      </Link>
    </HomeSection>
  );
};

export default Home;
