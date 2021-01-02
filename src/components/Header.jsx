import React from "react";
import LangContext from "../context/langContext/langContext";

const Header = () => {
  const { navigationData } = React.useContext(LangContext);

  if (Object.keys(navigationData).length === 0) {
    return null;
  }
  return (
    <header>
      <nav>
        <ul>
          {navigationData.map((item) => (
            <li key={item.id}>
              <a href={`#${item.slug}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
