import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

import styled from "@emotion/styled";
import BREAKPOINT from "../../Media";

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const Icons = styled.div`
  font-size: clamp(0.7rem, 0.7rem + 2vw, 2rem);
  display: flex;
`;
const LinkBaseS = styled.a`
  color: #bbbbbb;
  margin-right: 0.2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-right: 0.4rem;
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
  width: 7vw;
  background-color: var(--secondary-color);
  margin-right: 0.2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-right: 0.4rem;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const SocialMedia = () => {
  return (
    <Wrapper>
      <Line />
      <Icons>
        <BlackIcon
          href="https://github.com/vinandros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </BlackIcon>
        <Instagram
          href="https://www.instagram.com/vinandros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Instagram>
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
