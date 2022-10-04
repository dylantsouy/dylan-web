import React from "react";
import { useTranslation } from "langs/useTranslation";
import RwdPic from "assets/images/ionic.gif";
import MoviePic from "assets/images/movie.png";
import { ReactComponent as Line } from "assets/images/dashLine.svg";
import { ReactComponent as GreenBall } from "assets/images/greenBall.svg";
import { ReactComponent as OrangeBall } from "assets/images/orangeBall.svg";

const TwoIntro = () => {
  const { t } = useTranslation("twoIntro");
  return (
    <section className="twoIntro-outer">
      <div className="twoIntro-toparea">
        <div className="row">
          <div className="twoIntro-left">
            <div className="twoIntro-content interface-content">
              <div>
                <h2 className="twoIntro-title pixFadeUp">
                  {t("titleTop1")}
                  <br />
                  <span>{t("titleTop2")}</span>
                </h2>
                <p>{t("subtitleTop1")}</p>
                <p>{t("subtitleTop2")}</p>
              </div>
              <ul className="list-items pixFadeUp">
                <li>{t("liTop1")}</li>
                <li>{t("liTop2")}</li>
                <li>{t("liTop3")}</li>
                <li>{t("liTop4")}</li>
              </ul>
            </div>
          </div>
          
          <div className="twoIntro-right">
            <div className="twoIntro-image-wrapper style-one">
              <div className="image-one pixFadeUp">
                <img
                  src={MoviePic}
                  data-parallax='{"y" : 50}'
                  alt="interface"
                />
              </div>
              <OrangeBall
                data-parallax='{"y" : -50}'
                alt="interface"
                className="svgbg-two"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="bottom-left">
          <div className="twoIntro-image-wrapper style-two">
            <div className="image-three">
              <img src={RwdPic} data-parallax='{"x" : -30}' alt="interface" />
            </div>
            <GreenBall data-parallax='{"y" : -50}' className="svgbg-one" />
          </div>
        </div>

        <div className="bottom-right">
          <div className="twoIntro-content interface-content">
            <div>
              <h2 className="twoIntro-title pixFadeUp">
                {t("titleBottom1")}
                <br />
                <span>{t("titleBottom2")}</span>
              </h2>

              <p>{t("subtitleBottom")}</p>
            </div>

            <ul className="list-items list-with-icon pixFadeUp">
              <li>
                <i className="ei ei-icon_key_alt"></i>
                {t("liBottom1")}
              </li>
              <li>
                <i className="ei ei-icon_key_alt"></i>
                {t("liBottom2")}
              </li>
              <li>
                <i className="ei ei-icon_mug"></i>
                {t("liBottom3")}
              </li>
              <li>
                <i className="ei ei-icon_mug"></i>
                {t("liBottom4")}
              </li>
              <li>
                <i className="ei ei-icon_mug"></i>
                {t("liBottom5")}
              </li>
              <li>
                <i className="ei ei-icon_mug"></i>
                {t("liBottom6")}
              </li>
              <li>
                <i className="ei ei-icon_mug"></i>
                {t("liBottom7")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-wrap">
        <span className="ball" data-parallax='{"x" : -100}'></span>
        <Line />
      </div>
    </section>
  );
};
export default TwoIntro;
