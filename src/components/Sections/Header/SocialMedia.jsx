import { css } from "@emotion/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const Icons = styled.div`
  font-size: 5vw;
  display: flex;

  @media (min-width: 768px) {
    font-size: 2vw;
  }
`;
const LinkBaseS = styled.a`
  color: #bbbbbb;
  margin-right: 0.5rem;
  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const Instagram = styled(LinkBaseS)`
  &:hover {
    color: #be246a;
  }
`;

const BlackIcon = styled(LinkBaseS)`
  &:hover {
    color: #000000;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const Line = styled.div`
  position: relative;
  height: 1px;
  outline: var(--secondary-color) solid 1px;
  width: 70px;

  background-color: var(--secondary-color);
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    margin-right: 1rem;
    width: 200px;
  }
`;

const SocialMedia = () => {
  return (
    <Wrapper>
      <Line />
      <Icons>
        <Instagram
          href="https://www.instagram.com/vinandros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Instagram>
        <BlackIcon
          href="https://github.com/vinandros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </BlackIcon>
        <BlackIcon
          href="https://vinandros.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </BlackIcon>
      </Icons>
    </Wrapper>
  );
};

export default SocialMedia;
