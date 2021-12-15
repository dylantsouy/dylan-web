import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import Tooltip from "@mui/material/Tooltip";
import vueLogo from "../../assets/images/vue.png";
import angularLogo from "../../assets/images/angular.png";
import herokuLogo from "../../assets/images/heroku.png";
import gitLogo from "../../assets/images/git.png";
import sassLogo from "../../assets/images/sass.png";
import reactLogo from "../../assets/images/react.png";
import nodeLogo from "../../assets/images/node.png";
import htmlSetLogo from "../../assets/images/htmlset.png";
import mysqlLogo from "../../assets/images/mysql.png";
import typescriptLogo from "../../assets/images/typescript.png";
import mongoDBLogo from "../../assets/images/mongodb.png";
import sketchLogo from "../../assets/images/sketch.svg";
import jqueryLogo from "../../assets/images/jquery.png";
import materialLogo from "../../assets/images/material.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Skill = (props) => {
  const { t } = useTranslation("skill");
  const toolsSet1 = [
    { src: reactLogo, name: "React" },
    { src: angularLogo, name: "Angular" },
    { src: vueLogo, name: "Vue / Nuxt" },
    { src: nodeLogo, name: "Node.js / Express" },
    { src: mongoDBLogo, name: "MongoDB" },
    { src: htmlSetLogo, name: "Html + CSS + Javascript" },
    { src: typescriptLogo, name: "Typescript" },
    { src: jqueryLogo, name: "jQuery" },
    { src: sassLogo, name: "Sass / Less / Scss" },
    { src: gitLogo, name: "Git / Github / Gitlab / Bitbucket" },
    { src: mysqlLogo, name: "SQL Server" },
    { src: herokuLogo, name: "Heroku" },
    { src: sketchLogo, name: "Sketch" },
    { src: materialLogo, name: "Material UI / Ant Design / Bootstrap..." },
  ];
  return (
    <div className="skill section">
      <div className="title">
        <div className="title-inner">{t("mySkills")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <div className="skill-left">
          <div className="skill-area">
            <div className="skill-name">Front-end Skills</div>
            <div className="skill-bar-outer">
              <div className="skill-bar-value1"></div>
            </div>
          </div>
          <div className="skill-area">
            <div className="skill-name">Back-end Skills</div>
            <div className="skill-bar-outer">
              <div className="skill-bar-value2"></div>
            </div>
          </div>
          <div className="skill-area">
            <div className="skill-name">UI / UX Design</div>
            <div className="skill-bar-outer">
              <div className="skill-bar-value3"></div>
            </div>
          </div>
          <div className="skill-area">
            <div className="skill-name">English Ability</div>
            <div className="skill-bar-outer">
              <div className="skill-bar-value4"></div>
            </div>
          </div>
        </div>
        <div className="skill-right">
          <div className="skill-right-title">{t("tools")}</div>
          <div className="skill-right-body tools">
            <div className="tools1">
              {toolsSet1.length > 0 &&
                toolsSet1.map((e) => (
                  <Tooltip title={e.name} placement="top" key={e.name}>
                    <img src={e.src} alt={e.name} />
                  </Tooltip>
                ))}
            </div>
          </div>
          <div className="skill-right-title">{t("expirence")}</div>
          <div className="skill-right-body certificates">
            <div className="skill-right-text">
              <FiberManualRecordIcon />
              伍豐科技股份有限公司 Research and Development Department -
              Frontend Developer ( 2021/2 ~ Now )
            </div>
            <div className="skill-right-text">
              <FiberManualRecordIcon />
              旺旺中時媒體集團 - Software Engineer ( 2020/9 ~ 2021/2 )
            </div>
            <div className="skill-right-text">
              <FiberManualRecordIcon />
              鼎羿科技有限公司 - Frontend Developer ( 2020/3 ~ 2020/8 )
            </div>
            <div className="skill-right-text">
              <FiberManualRecordIcon />
              GLOBAL B2B CONSULTANCY INC - CS Leader ( 2017/9 ~ 2020/2 )
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
