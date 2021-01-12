import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "../Styles/GlobalStyles";
import Header from "../Sections/Header/Header";
import { Helmet } from "react-helmet";
import Custom from "./Custom/Custom";
import BREAKPOINT from "../Media";
const LayoutS = styled.main`
  margin: 0 auto;
  max-width: 87vw;
  @media (min-width: ${BREAKPOINT.md}) {
    width: 87vw;
    max-width: 1200px;
  }
`;

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <LayoutS>
        <Helmet>
          <title>{`Vin Andros${title ? " - " + title : ""}`}</title>
        </Helmet>
        <Header />
        {children}
        <Custom />
      </LayoutS>
    </>
  );
};

export default Layout;
