import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Babel = () => {
  const data = useStaticQuery(graphql`
    query {
      babel: file(relativePath: { eq: "babel.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <GatsbyImage fixed={data.babel.childImageSharp.fixed} alt="Babel logo" />
  );
};

export default Babel;
