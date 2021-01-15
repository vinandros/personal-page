import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Gatsbyjs = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsbyjs: file(relativePath: { eq: "gatsbyjs.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <GatsbyImage
      fixed={data.gatsbyjs.childImageSharp.fixed}
      alt="Gatsbyjs logo"
    />
  );
};

export default Gatsbyjs;
