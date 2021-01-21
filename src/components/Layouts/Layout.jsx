import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
import BREAKPOINT from "../Media";
import Footer from "./Footer";
const LayoutS = styled.main`
  margin: 0 auto;
  max-width: 93vw;
  @media (min-width: ${BREAKPOINT.md}) {
    width: 87vw;
    max-width: 1200px;
  }
  @media (min-width: ${BREAKPOINT.md}) {
    margin-bottom: 10rem;
  }
  margin-bottom: 4rem;
`;

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <LayoutS id="top">
        <Helmet>
          <title>{`Kevin ${title ? " | " + title : ""}`}</title>
        </Helmet>
        <Header />
        {children}
      </LayoutS>
      <Footer />
    </>
  );
};

export default Layout;
