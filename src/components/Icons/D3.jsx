import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const D3 = () => {
  const data = useStaticQuery(graphql`
    query {
      d3: file(relativePath: { eq: "d3.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <GatsbyImage fixed={data.d3.childImageSharp.fixed} alt="D3 logo" />;
};

export default D3;
