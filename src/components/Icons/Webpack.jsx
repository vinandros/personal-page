import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Webpack = () => {
  const data = useStaticQuery(graphql`
    query {
      webpack: file(relativePath: { eq: "webpack.png" }) {
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
      fixed={data.webpack.childImageSharp.fixed}
      alt="webpack logo"
    />
  );
};

export default Webpack;
