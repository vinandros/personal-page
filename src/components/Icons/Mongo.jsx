import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Mongo = () => {
  const data = useStaticQuery(graphql`
    query {
      mongo: file(relativePath: { eq: "mongo.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <GatsbyImage fixed={data.mongo.childImageSharp.fixed} alt="Mongo logo" />
  );
};

export default Mongo;
