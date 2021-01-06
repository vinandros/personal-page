import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../../../context/themeContext/themeProvider";

const Label = styled.label`
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 50px;
  width: 50px;
  height: 26px;
  position: relative;
`;
const Ball = styled.div`
  position: absolute;
  background-color: white;
  height: 22px;
  width: 22px;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Label} ${Ball} {
    transform: translateX(24px);
  }
`;
const ThemeToggle = () => {
  const { dark, toggleDark } = React.useContext(ThemeContext);
  console.log(dark);
  return (
    <div>
      <Input
        onChange={toggleDark}
        checked={dark}
        type="checkbox"
        name="themeToogle"
        id="themeToogle"
      />
      <Label htmlFor="themeToogle">
        <FontAwesomeIcon icon={faMoon} color="#f1c40f" />
        <FontAwesomeIcon icon={faSun} color="#f39c12" />
        <Ball />
      </Label>
    </div>
  );
};

export default ThemeToggle;
