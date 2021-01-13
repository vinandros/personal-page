import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import BREAKPOINT from "../../Media";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 12vw;
  max-height: 12vh;
  /* display: flex;
  justify-content: center;
  align-items: flex-start; */

  @media (min-width: ${BREAKPOINT.md}) {
    width: 85px;
    height: 85px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid {
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
