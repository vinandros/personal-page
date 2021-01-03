import React, { createContext, useState } from "react";
import { DataEN } from "./Queries/queryEN";
import { DataES } from "./Queries/queryES";
const initialState = {
  lang: "en",
  toggleLang: () => {},
};

const LangContext = createContext(initialState);

const LangProvider = ({ children }) => {
  const [langState, setLangState] = React.useState("en");
  // =====================English=======================================
  const [heroEN, setHeroEN] = useState(undefined);
  const [navigationEN, setNavigationEN] = useState(undefined);
  // =====================Spanish=======================================
  const [heroES, setHeroES] = useState(undefined);
  const [navigationES, setNavigationES] = useState(undefined);
  // ============================================================
  const EN = DataEN();
  const ES = DataES();
  // ============================================================

  function toggleLang() {
    let lang = langState;
    if (lang === "en") {
      lang = "es";
    } else {
      lang = "en";
    }
    localStorage.setItem("lang", JSON.stringify(lang));
    setLangState(lang);
  }

  React.useEffect(() => {
    // ================LangState==========================================
    const lang = JSON.parse(localStorage.getItem("lang")) || "en";
    setLangState(lang);

    // ================English============================================
    setHeroEN(EN.HeroData);
    setNavigationEN(EN.NavigationData);
    // ================Spanish============================================
    setHeroES(ES.HeroData);
    setNavigationES(ES.NavigationData);
  }, [EN, ES]);
  return (
    <LangContext.Provider
      value={{
        lang: langState,
        toggleLang,
        heroData: langState === "es" ? heroES : heroEN,
        navigationData: langState === "es" ? navigationES : navigationEN,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
export { LangProvider };
