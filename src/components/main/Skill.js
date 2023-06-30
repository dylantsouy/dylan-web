import React from "react";
import { useTranslation } from "langs/useTranslation";
import Tooltip from "@mui/material/Tooltip";
import { toolsSet1 } from "helpers/skillsImg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import downBg from "assets/images/down-bg.png";

const Skill = () => {
  const { t } = useTranslation("skill");
  const sklls = ['Front-end Skills', 'Back-end Skills', 'UI / UX Design', 'CI / CD & Deploy']
  const companys = [
    { name: '仁寶電腦', position: 'Software Engineer', duration: '2022/8 ~ Now' },
    { name: '伍豐科技股份有限公司', position: 'Frontend Developer', duration: '2021/2 ~ 2022/7' },
    { name: '旺旺中時媒體集團', position: 'Software Engineer', duration: '2020/9 ~ 2021/2 ' },
    { name: '鼎羿科技有限公司', position: 'Frontend Developer', duration: '2020/3 ~ 2020/8' },
    { name: 'GLOBAL B2B CONSULTANCY INC', position: 'CS Leader', duration: '2017/9 ~ 2020/2' },
  ]
  return (
    <div className="skill section">
      <div className="title">
        <div className="title-inner">{t("mySkills")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <div className="skill-left">
          {sklls.map((e, i) => (
            <div className="skill-area" key={e}>
              <div className="skill-name">{e}</div>
              <div className="skill-bar-outer">
                <div className={`skill-bar-value${i + 1}`}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-right">
          <div className="skill-right-title">{t("tools")}</div>
          <div className="skill-right-body tools">
            <div className="tools1">
              {toolsSet1.map((e) => (
                <Tooltip title={e.name} placement="top" key={e.name}>
                  <img src={e.src} alt={e.name} />
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="skill-right-title">{t("expirence")}</div>
          <div className="skill-right-body certificates">
            {companys.map((e) => (
              <div className="skill-right-text" key={e.name}>
                <FiberManualRecordIcon />
                {e.name} - {e.position} ( {e.duration} )
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="down-bg">
        <img className="normal" src={downBg} alt="down-bg" data-parallax='{"y": 200}' />
        <img className="rwd" src={downBg} alt="down-bg" data-parallax='{"y": 380}' />
      </div>
    </div>
  );
};
export default Skill;
