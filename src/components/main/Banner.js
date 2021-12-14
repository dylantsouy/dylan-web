import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import ClickBtn from "../common/ClickBtn";
import selfPhoto from "../../assets/images/self.svg";
import mainBall from "../../assets/images/mainBall.svg";
import ReactTypingEffect from "react-typing-effect";
import { scrollTo } from "../../helpers/router";

const Banner = (props) => {
  const { t } = useTranslation("banner");
  return (
    <div className="banner home">
      <div className="banner-left">
        <div className="hello">{t("helloIam")}</div>
        <div className="name">{t("selfName")}</div>
        <div className="position">
          <span>
            {t("passionate")}
            <ReactTypingEffect text={[t("position1"), t("position2")]} />
          </span>
        </div>
        <div className="intro">{t("intro")}</div>
        <div className="btn-area">
          <ClickBtn
            width="180px"
            type="primaryBtn"
            text={t("myWork")}
            fontSize="20px"
            onClick={() => scrollTo(0, 600, `.project`)}
          />
          <ClickBtn
            width="180px"
            type="secBtn"
            text={t("contact")}
            fontSize="20px"
            onClick={() => scrollTo(0, 600, `.contact`)}
          />
        </div>
      </div>
      <div className="banner-right">
        <div className="banner-img">
          <img src={selfPhoto} alt="selfPhoto" className="selfPhoto" />
          <img src={mainBall} alt="mainBall" className="mainBall" />
        </div>
      </div>
      <div className="go-to">
        <div onClick={() => scrollTo(0, 600, `.about`)}>
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Banner;
