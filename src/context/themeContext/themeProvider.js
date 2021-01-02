import React, { createContext } from "react";

const initialState = {
  dark: false,
  toggleDark: () => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [darkState, setDarkState] = React.useState(false);

  function toggleDark() {
    let dark = !darkState;
    localStorage.setItem("dark", JSON.stringify(dark));
    setDarkState(dark);
  }

  React.useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark")) || false;
    setDarkState(lsDark);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        dark: darkState,
        toggleDark: toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
