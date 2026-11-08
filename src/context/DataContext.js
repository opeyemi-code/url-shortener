import { createContext, useState, useEffect } from "react";

export const ShortenedLinksContext = createContext();

function DataProvider({ children }) {
  const [showHarmburgerMenu, setShowHarmburgerMenu] = useState(false);

  const [shortenedLinks, setShortenedLinks] = useState(() => {
    return JSON.parse(
      localStorage.getItem("storedShortenedLinks") || "[]"
    );
  });

  useEffect(() => {
    localStorage.setItem(
      "storedShortenedLinks",
      JSON.stringify(shortenedLinks)
    );
  }, [shortenedLinks]);

  return (
    <ShortenedLinksContext.Provider
      value={{
        showHarmburgerMenu,
        setShowHarmburgerMenu,
        shortenedLinks,
        setShortenedLinks,
      }}
    >
      {children}
    </ShortenedLinksContext.Provider>
  );
}

export default DataProvider;