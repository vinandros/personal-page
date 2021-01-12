import styled from "@emotion/styled";
import React from "react";
import ThemeContext from "../../../context/themeContext";
import BREAKPOINT from "../../Media";
const LogoStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 12%;
  max-height: 12%;

  @media (min-width: ${BREAKPOINT.md}) {
    width: 85px;
    height: 85px;
  }
`;
const Logo = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <LogoStyles>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
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
              fill={dark ? "#000" : "#fff"}
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
              fill={dark ? "#000" : "#fff"}
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
