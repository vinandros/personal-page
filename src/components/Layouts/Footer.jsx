import styled from "@emotion/styled";
import React from "react";

const FooterSection = styled.section`
  width: 100%;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
`;

const Link = styled.a`
  &:hover {
  }
  & p {
    color: white;
    font-weight: bold;
    border-bottom: 2px solid white;
    animation: border-bottom ease 2s;
  }
  & p:hover {
    border-bottom: 2px solid var(--secondary-color);
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > a {
    margin-left: 2rem;
  }
`;

const PLink = styled.a`
  & p {
    color: white;
    font-weight: bold;
    font-size: clamp(1.5rem, 1.5rem + 1vw, 2rem);
    transition: transform ease 0.3s;
  }
  & p:hover {
    transform: translateY(-0.5rem);
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Link href="mailto:vinandros@gmail.com">
        <p>vinandros@gmail.com</p>
      </Link>
      <PLink href="#main">
        <p>^</p>
      </PLink>
      <SocialMediaWrapper>
        <Link
          href="https://github.com/vinandros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Github</p>
        </Link>
        <Link
          href="https://www.instagram.com/vinandros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Instagram </p>
        </Link>
        <Link
          href="https://vinandros.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Medium </p>
        </Link>
      </SocialMediaWrapper>
    </FooterSection>
  );
};

export default Footer;
