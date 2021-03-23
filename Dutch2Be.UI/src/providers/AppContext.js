import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [article, setArticle] = useState("");
  const value = { word, setWord, article, setArticle };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
