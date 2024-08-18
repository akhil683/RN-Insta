import React, { createContext, useState, useContext, ReactNode } from "react";
import { lightTheme, darkTheme, Theme } from "@/constants/theme";

type ThemeContextType = {
  theme: Theme;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const setDarkTheme = () => {
    setTheme(darkTheme);
  };
  const setLightTheme = () => {
    setTheme(lightTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
