import React from "react";
import GlobalStyles from "../components/GlobalStyles";
import loadable from "@loadable/component";
import Home from "../components/Home";
import Hero from "../components/Hero";

const Snowfall = loadable(() => import("../components/SnowFall"));

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Snowfall />
      <Home />
      <Hero />
    </>
  );
};

export default IndexPage;
