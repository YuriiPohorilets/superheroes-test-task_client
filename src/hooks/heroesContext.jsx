import { createContext, useContext, useState } from "react";

const HeroesContext = createContext();

export const useHeroes = () => useContext(HeroesContext);

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState(null);

  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}>
      {children}
    </HeroesContext.Provider>
  );
};
