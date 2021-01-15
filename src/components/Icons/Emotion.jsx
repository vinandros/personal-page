import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";

const Emotion = () => {
  const data = useStaticQuery(graphql`
    query {
      emotion: file(relativePath: { eq: "emotion.png" }) {
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
      fixed={data.emotion.childImageSharp.fixed}
      alt="Emotion logo"
    />
  );
};

export default Emotion;
