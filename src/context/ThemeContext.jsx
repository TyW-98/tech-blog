"use client";

import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} base-theme`}>{props.children}</div>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
