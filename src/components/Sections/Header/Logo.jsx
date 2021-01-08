import { ThemeContext } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
const LogoStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 14vw;
  height: 14vw;
  color: red;
  @media (min-width: 768px) {
    width: 5vw;
    height: 3vw;
  }
`;
const Logo = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <LogoStyles>
      <a href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="80"
          // height="80"
          viewBox="0 0 80 80"
        >
          <g id="Group_2" transform="translate(-131 -182)">
            <circle
              id="Ellipse_4"
              cx="40"
              cy="40"
              r="40"
              fill={dark ? "#fff" : "#000"}
              transform="translate(131 182)"
            />
            <text
              id="V"
              transform="translate(144 232)"
              fill="#fff"
              fontSize="45"
              fontFamily="OpenSans-Bold, Open Sans"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                V
              </tspan>
            </text>
            <text
              id="A"
              transform="translate(165 244)"
              fill="#fff"
              fontSize="45"
              fontFamily="OpenSans-Bold, Open Sans"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                A
              </tspan>
            </text>
          </g>
        </svg>
      </a>
    </LogoStyles>
  );
};

export default Logo;
