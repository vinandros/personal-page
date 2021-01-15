import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Redux = () => {
  const data = useStaticQuery(graphql`
    query {
      redux: file(relativePath: { eq: "redux.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <GatsbyImage fixed={data.redux.childImageSharp.fixed} alt="Redux logo" />
  );
};

export default Redux;
