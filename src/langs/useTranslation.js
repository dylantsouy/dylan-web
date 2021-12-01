import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const useTranslation = (f) => {
  const languageContext = useContext(LanguageContext);

  const t = (text) => {
    return (
      text
        .split(".")
        .reduce((o, i) => o && o[i], languageContext.dictionary[f]) || text
    );
  };

  return { t };
};
