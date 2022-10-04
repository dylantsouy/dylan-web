import React, { useState, useContext, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IconButton } from "@mui/material";
import { LanguageContext } from "langs/LanguageContext";
import { languageOptions } from "langs/index";

const LangSelect = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const handleLangMenuOpen = () => {
    setOpen(true);
  };

  const handleLangMenuClose = () => {
    setOpen(false);
  };

  const handleLangChange = (event) => {
    userLanguageChange(event.target.value);
  };

  const langOptions = useMemo(() => {
    return Object.entries(languageOptions).map(([id, name]) => (
      <MenuItem key={id} value={id} name={id}>
        {name}
      </MenuItem>
    ))
  }, [])

  const renderLangMenu = (
    <Select
      open={open}
      id="langMenu"
      defaultValue={userLanguage}
      onClose={handleLangMenuClose}
      value={userLanguage}
      onChange={handleLangChange}
      MenuProps={{ disableScrollLock: true }}
    >
     {langOptions}
    </Select>
  );

  return (
    <div className="langSelect">
      <IconButton
        className="langBtn"
        aria-label="lang"
        onClick={handleLangMenuOpen}
      >
        <span
          className={`flag-icon flag-icon-${userLanguage && userLanguage}`}
        />
      </IconButton>
      {renderLangMenu}
    </div>
  );
};

export default LangSelect;
