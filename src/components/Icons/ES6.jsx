import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const ES6 = () => {
  const data = useStaticQuery(graphql`
    query {
      es6: file(relativePath: { eq: "es6.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <GatsbyImage fixed={data.es6.childImageSharp.fixed} alt="ES6 logo" />;
};

export default ES6;
