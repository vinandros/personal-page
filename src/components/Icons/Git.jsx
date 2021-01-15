import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Git = () => {
  const data = useStaticQuery(graphql`
    query {
      git: file(relativePath: { eq: "git.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return <GatsbyImage fixed={data.git.childImageSharp.fixed} alt="Git logo" />;
};

export default Git;
