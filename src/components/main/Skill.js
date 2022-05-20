import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import Tooltip from "@mui/material/Tooltip";
import { toolsSet1 } from "../../helpers/skillsImg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import downBg from "../../assets/images/down-bg.png";

const Skill = () => {
  const { t } = useTranslation("skill");
  
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
            <div className="skill-name">CI / CD & Deploy</div>
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
			<div className="down-bg">
				<img className="normal" src={downBg} alt="down-bg"  data-parallax='{"y": 200}'/>
				<img className="rwd" src={downBg} alt="down-bg"  data-parallax='{"y": 380}'/>
			</div>
    </div>
  );
};
export default Skill;
