import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import styled from "@emotion/styled";

const Wrapper = styled(GatsbyImage)`
  max-width: 768px;
  box-shadow: ${({ dark }) =>
    dark ? "0 0 0 black;" : "0 1rem 3rem rgba(0, 0, 0, 0.175)"};
  border-radius: 0.25rem;
  transition: box-shadow ease-in var(--color-transition);
  outline: ${({ dark }) => (dark ? "3px solid white" : null)};
  transition: outline ease-in var(--color-transition);
  /* @media (min-width: 768px) {
    width: 100%;
    max-width: 475px;
  } */
`;

export const HeroImg = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativePath: { eq: "profile.jpg" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 768) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  // console.log(data);
  const img = data.images.edges[0].node.childImageSharp.fluid;
  // console.log(img);
  return <Wrapper fluid={img} alt="profile photo" />;
};

export default HeroImg;
