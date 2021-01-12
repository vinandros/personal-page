import React, { createContext, useState } from "react";
import LangEN from "../lang/langEN";
import LangES from "../lang/langES";
const initialState = {
  lang: "en",
  toggleLang: () => {},
};

const LangContext = createContext(initialState);

const LangProvider = ({ children }) => {
  const [langState, setLangState] = React.useState("en");
  // =====================English=======================================
  const [english, setEnglish] = useState(undefined);
  // =====================Spanish=======================================
  const [spanish, setSpanish] = useState(undefined);

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
    // ================set Langs============================================
    setEnglish(LangEN);
    setSpanish(LangES);
    // ================LangState==========================================
    const lang = JSON.parse(localStorage.getItem("lang")) || "en";
    setLangState(lang);
  }, []);
  if (!english || !spanish) return null;
  return (
    <LangContext.Provider
      value={{
        lang: langState,
        toggleLang,
        hero: langState === "es" ? english.Hero : spanish.Hero,
        home: langState === "es" ? english.Home : spanish.Home,
        quotes: langState === "es" ? english.Quotes : spanish.Quotes,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
export { LangProvider };
