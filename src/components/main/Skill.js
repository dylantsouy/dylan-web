import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import skill1 from "../../assets/images/skill1.svg";
import skill2 from "../../assets/images/skill2.svg";
import skill3 from "../../assets/images/skill3.svg";
import skill4 from "../../assets/images/skill4.svg";
import skillBg1 from "../../assets/images/skillBg1.png";
import skillBg2 from "../../assets/images/skillBg2.png";
import skillBg3 from "../../assets/images/skillBg3.png";
import skillBg4 from "../../assets/images/skillBg4.png";

const Skill = (props) => {
  const { t } = useTranslation("skill");

  return (
    <div className="skill section">
      <div className="title">
        <div className="title-inner">{t("mySkills")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <div className="skill-top">
          <div className="skill-block skill1">
            <img src={skillBg1} alt="skillBg1" />
            <div className="skill-inner">
            <img src={skill1} alt="skill1" />
              <div className="skill-name">{t("frontend")}</div>
              <div className="skill-text">{t("frontendText")}</div>
            </div>
          </div>
          <div className="skill-block skill2">
            <img src={skillBg2} alt="skillBg2" />
            <div className="skill-inner">
              <img src={skill2} alt="skill2" />
              <div className="skill-name">{t("backend")}</div>
              <div className="skill-text">{t("backendText")}</div>
            </div>
          </div>
        </div>
        <div className="skill-bottom">
          <div className="skill-block skill3">
            <img src={skillBg3} alt="skillBg3" />
            <div className="skill-inner">
              <img src={skill3} alt="skill3" />
              <div className="skill-name">{t("ui")}</div>
              <div className="skill-text">{t("uiText")}</div>
            </div>
          </div>
          <div className="skill-block skill4">
            <img src={skillBg4} alt="skillBg4" />
            <div className="skill-inner">
              <img src={skill4} alt="skill4" />
              <div className="skill-name">{t("other")}</div>
              <div className="skill-text">{t("otherText")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
