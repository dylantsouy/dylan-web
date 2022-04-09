import React, { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { languageOptions, dictionaryList } from "./index";
import * as localforage from "localforage";

// it provides the language context to app
export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState("tw");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let lang = await localforage.getItem("rcml-lang");
    /** 
     * To prevent error about someday someone to change lang name e.g. 'zh_tw' => 'tw', and user still have old rcml-lang value 'zh_tw' in browser indexDB, 
     * so give it below conditional expressions to see if now includes this value, if not give it to default value 'en' 
     * By Dylan 
     * */
    if (!Object.keys(dictionaryList).includes(lang)) {
      await localforage.setItem("rcml-lang", "tw");
      setUserLanguage("tw");
    } else {
      setUserLanguage(lang || "tw");
    }
  };

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "tw";
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
