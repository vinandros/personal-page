import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import BREAKPOINT from "../../Media";
const Wrapper = styled.div`
  width: 40px;
  height: 40px;

  @media (min-width: ${BREAKPOINT.md}) {
    width: 70px;
    height: 70px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Link to="/">
        <GatsbyImage fluid={data.file.childImageSharp.fluid} alt="logo" />
      </Link>
    </Wrapper>
  );
};

export default Logo;
