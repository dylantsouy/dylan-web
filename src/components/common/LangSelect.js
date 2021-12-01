import React, { useState,useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { LanguageContext } from "../../langs/LanguageContext";
import { languageOptions } from "../../langs/index";

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

  const renderLangMenu = (
    <Select
      open={open}
      defaultValue={userLanguage}
      onClose={handleLangMenuClose}
      value={userLanguage}
      onChange={handleLangChange}
      MenuProps={{ id: "lang-select" }}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <MenuItem key={id} value={id} name={id}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );

  return (
    <div className="langSelect">
      <IconButton
        className="langBtn"
        aria-label="lang"
        onClick={handleLangMenuOpen}
      >
        <TranslateIcon />
      </IconButton>
      {renderLangMenu}
    </div>
  );
};

export default LangSelect;
