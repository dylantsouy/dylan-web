import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { languageOptions, dictionaryList } from "./index";
import * as localforage from "localforage";

// it provides the language context to app
export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("us");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let lang = await localforage.getItem("rcml-lang");
    if (!Object.keys(dictionaryList).includes(lang)) {
      await localforage.setItem("rcml-lang", "us");
      setUserLanguage("us");
    } else {
      setUserLanguage(lang || "us");
    }
  };

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "us";
      setUserLanguage(newLanguage);
      localforage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
