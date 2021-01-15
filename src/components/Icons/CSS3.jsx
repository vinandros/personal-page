import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const CSS3 = () => {
  const data = useStaticQuery(graphql`
    query {
      css3: file(relativePath: { eq: "css3.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <GatsbyImage fixed={data.css3.childImageSharp.fixed} alt="CSS3 logo" />
  );
};

export default CSS3;
