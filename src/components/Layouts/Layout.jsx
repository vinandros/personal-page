import React from "react";
import styled from "@emotion/styled";
import loadable from "@loadable/component";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "../Sections/Header/Header";
import { Helmet } from "react-helmet";
const LayoutS = styled.main`
  margin: 0 auto;
  max-width: 87vw;
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 70vw;
  }
`;

const Snowfall = loadable(() => import("../Styles/SnowFall"));

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      {/* <Snowfall /> */}
      <LayoutS>
        <Helmet>
          <title>{`Vin Andros${title ? " - " + title : ""}`}</title>
        </Helmet>
        <Header />
        {children}
      </LayoutS>
    </>
  );
};

export default Layout;
