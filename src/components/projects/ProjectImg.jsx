import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import ImgProject from "../ImgProject";

const ProjectImg = ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const image = data.images.edges.find((n) =>
    n.node.relativePath.includes(filename)
  );
  if (!image) return null;
  const imageFluid = image.node.childImageSharp.fluid;
  return <ImgProject fluid={imageFluid} alt={alt} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
