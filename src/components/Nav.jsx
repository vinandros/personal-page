import styled from "@emotion/styled";
import React from "react";
import LangContext from "../context/langContext/langContext";

const NavStyles = styled.nav`
  position: fixed;
  top: 35vh;
`;

const LiStyles = styled.li`
  padding: 1rem;
  &:hover {
    transform: scale(1.2);
  }
  width: 100px;
`;

const Nav = () => {
  const { navigationData, toggleLang } = React.useContext(LangContext);
  if (!navigationData) return null;
  return (
    <NavStyles>
      <ul>
        {navigationData.map((item) => (
          <LiStyles key={item.id}>
            <a href={`#${item.slug}`}>{item.title}</a>
          </LiStyles>
        ))}
      </ul>

      <button onClick={toggleLang}>es/en</button>
    </NavStyles>
  );
};

export default Nav;
