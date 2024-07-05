import React, { createContext, useContext, useReducer } from "react";

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DARK":
      return { ...state, theme: "dark" };
    case "SET_LIGHT":
      return { ...state, theme: "light" };
    default:
      return state;
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, { theme: "light" });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
