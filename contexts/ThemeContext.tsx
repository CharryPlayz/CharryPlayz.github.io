import React from "react";
import { useContext } from "react";
import { useState } from "react";

const ThemeContext = React.createContext(true);
const ThemeUpdateContext = React.createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: { children: JSX.Element }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
