import React, { useContext } from "react";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
// import LangToggle from "../components/LangToggle";
// import Quote from "../components/Quote";
import LangContext from "../context/langContext/langContext";
// import ThemeContext from "../context/themeContext/themeProvider";

const IndexPage = () => {
  // const { dark, toggleDark } = useContext(ThemeContext);
  const {
    toggleLang,
    heroData: { title },
  } = useContext(LangContext);

  return (
    <>
      <GlobalStyles />
      <h1>{title}</h1>
      <Header />
      {/* <button onClick={toggleDark}>Dark</button> */}
      <button onClick={toggleLang}>es / en</button>
      {/* <Quote /> */}
      {/* <LangToggle /> */}
    </>
  );
};

export default IndexPage;
