import React from "react";
import styled from "@emotion/styled";
import BREAKPOINT from "../../Media";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { keyframes } from "@emotion/react";

const EaseIn = keyframes`
 from {
    margin-right:-200px;
    opacity:0;
  }
  to {
    margin-right:0;
    opacity:1;
  }
`;

const EaseInLine = keyframes`
 from {
    width:0;
  }
  to {
   width:27vw;
  }
`;
const EaseInLineM = keyframes`
 from {
    width:0;
  }
  to {
   width:7vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  animation-name: ${EaseIn};
  animation-duration: 1s;
`;

const Img = styled(GatsbyImage)`
  margin-left: 0.5rem;
`;

const Line = styled.div`
  animation-name: ${EaseInLine};
  animation-duration: 2s;
  position: relative;
  height: 1px;
  outline: var(--secondary-color) solid 1px;
  width: 27vw;
  background-color: var(--secondary-color);
  margin-right: 0.2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-right: 0.4rem;
    width: 7vw;
    animation-name: ${EaseInLineM};
    animation-duration: 2s;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Link = styled.a`
  & img {
    filter: invert(50%);
  }
  & img:hover {
    filter: invert(0%);
  }
`;

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(relativePath: { eq: "medium.png" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Line />
      <Link
        href="https://github.com/vinandros"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={data.github.childImageSharp.fixed} />
      </Link>
      <Link
        href="https://www.instagram.com/vinandros/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={data.instagram.childImageSharp.fixed} />
      </Link>
      <Link
        href="https://vinandros.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fixed={data.medium.childImageSharp.fixed} />
      </Link>
    </Wrapper>
  );
};

export default SocialMedia;
