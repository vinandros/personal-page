import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Html5 = () => {
  const data = useStaticQuery(graphql`
    query {
      html5: file(relativePath: { eq: "html5.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <GatsbyImage fixed={data.html5.childImageSharp.fixed} alt="Html 5 logo" />
  );
};

export default Html5;
