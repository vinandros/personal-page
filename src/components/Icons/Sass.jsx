import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Sass = () => {
  const data = useStaticQuery(graphql`
    query {
      sass: file(relativePath: { eq: "sass.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <GatsbyImage fixed={data.sass.childImageSharp.fixed} alt="Sass logo" />
  );
};

export default Sass;
