import react, { createContext, useState } from "react";
import React from "react";
import { ThemeLight } from "../components/Content/Content";

export const GlobalThemeContext = createContext("");
const ThemeContext = ({ children }: any) => {
    const [ways, setWays] = useState(ThemeLight);
  return (
    <GlobalThemeContext.Provider value={{ ways, setWays } as any}>
      {children}
    </GlobalThemeContext.Provider>
  );
};

export default ThemeContext;
