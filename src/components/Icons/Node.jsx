import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Node = () => {
  const data = useStaticQuery(graphql`
    query {
      node: file(relativePath: { eq: "node.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <GatsbyImage fixed={data.node.childImageSharp.fixed} alt="Node logo" />
  );
};

export default Node;
