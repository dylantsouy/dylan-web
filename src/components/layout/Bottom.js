import React from "react";
import logo from "assets/images/logo.png";
import { useTranslation } from "langs/useTranslation";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";

const Bottom = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bottom">
      <div className="bottom-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="bottom-copyright">{t("copyright")}</div>
      <div className="bottom-right">
        <div className="bottom-logo-rwd">
          <img src={logo} alt="logo" />
        </div>
        <div className="bottom-link">
          <Tooltip title="Github" placement="top">
            <a
              href="https://github.com/dylantsouy"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </Tooltip>
          <Tooltip title="Facebook" placement="top">
            <a
              href="https://www.facebook.com/fu.y.zou"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </Tooltip>
          <Tooltip title="Email to me" placement="top">
            <a
              href="mailto:bear817005@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </Tooltip>
        </div>
        <div className="bottom-copyright-rwd">{t("copyright")}</div>
      </div>
    </div>
  );
};

export default Bottom;
