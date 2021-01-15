import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Reactjs = () => {
  const data = useStaticQuery(graphql`
    query {
      reactjs: file(relativePath: { eq: "reactjs.png" }) {
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
      fixed={data.reactjs.childImageSharp.fixed}
      alt="Reactjs logo"
    />
  );
};

export default Reactjs;
