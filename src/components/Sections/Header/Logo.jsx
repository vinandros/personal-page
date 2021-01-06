import styled from "@emotion/styled";
import React from "react";
const LogoStyles = styled.div`
  width: 14vw;
  height: 14vw;
  @media (min-width: 768px) {
    width: 5vw;
    height: 5vw;
  }
`;
const Logo = () => {
  return (
    <LogoStyles>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="65"
          // height="65"

          viewBox="0 0 65 65"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-141 -97)">
            <g
              id="Ellipse_4"
              data-name="Ellipse 4"
              transform="translate(141 97)"
              stroke="#000"
              strokeWidth="1"
            >
              <circle cx="32.5" cy="32.5" r="32.5" stroke="none" />
              <circle cx="32.5" cy="32.5" r="32" fill="none" />
            </g>
            <text
              id="VIN."
              transform="translate(156 143)"
              fill="#fff"
              fontSize="20"
              fontFamily="Open Sans"
              fontWeight="800"
            >
              <tspan x="0" y="0">
                VIN.
              </tspan>
            </text>
            <text
              id="KE"
              transform="translate(154 126)"
              fill="#fff"
              fontSize="20"
              fontFamily="Open Sans"
              fontWeight="800"
            >
              <tspan x="0" y="0">
                KE
              </tspan>
            </text>
          </g>
        </svg>
      </a>
    </LogoStyles>
  );
};

export default Logo;
