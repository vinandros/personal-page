import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Next = () => {
  const data = useStaticQuery(graphql`
    query {
      next: file(relativePath: { eq: "next.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <GatsbyImage fixed={data.next.childImageSharp.fixed} alt="Next logo" />
  );
};

export default Next;
