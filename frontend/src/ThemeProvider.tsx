import React from "react";
import { useDarkMode } from "./store/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}


//Este componente ThemeProvider envuelve a otros componentes y les proporciona el contexto del modo oscuro. Lo usamos en el main.ts para envolver la App.tsx
export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      {children}
    </div>
  );
};