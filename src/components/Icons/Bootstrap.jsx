import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Bootstrap = () => {
  const data = useStaticQuery(graphql`
    query {
      bootstrap: file(relativePath: { eq: "bootstrap.png" }) {
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
      fixed={data.bootstrap.childImageSharp.fixed}
      alt="Bootstrap logo"
    />
  );
};

export default Bootstrap;
