import React from "react";
import { useTranslation } from "langs/useTranslation";
import { ReactComponent as SelfPhoto } from "assets/images/self.svg";
import mainBall from "assets/images/mainBall.svg";
import bannerShape from "assets/images/banner-shape.png";
import ReactTypingEffect from "react-typing-effect";
import ClickBtn from "../common/ClickBtn";
import { scrollTo } from "helpers/router";

const Banner = () => {
  const { t } = useTranslation("banner");
  return (
    <div className="banner-outer">
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
              type="primaryBtn"
              text={t("myWork")}
              fontSize="20px"
              onClick={() => scrollTo(0, 600, `.project`)}
            />
            <ClickBtn
              type="secBtn"
              text={t("blog")}
              fontSize="20px"
              onClick={() => window.open('https://medium.com/@bear817005')}
            />
          </div>
        </div>
        <div className="banner-right">
          <div className="banner-img">
            <SelfPhoto className="selfPhoto" />
            <img src={mainBall} alt="mainBall" className="mainBall" />
          </div>
        </div>
      </div>
      <div className="bg-shape-inner">
        <div className="go-to">
          <div onClick={() => scrollTo(0, 600, `.about`)}>
            <span></span>
          </div>
        </div>
        <div className="bottom-shape">
          <img className="rwd" src={bannerShape} alt="circle" data-parallax='{"y": 15}' />
          <img className="normal" src={bannerShape} alt="circle" data-parallax='{"y": 25}' />
        </div>
      </div>
    </div>
  );
};
export default Banner;
