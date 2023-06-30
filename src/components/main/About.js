import React from "react";
import { useTranslation } from "langs/useTranslation";
import aboutPic from "assets/images/aboutPic.png";
import cv from "assets/files/FuYen, Tsou - CV (2023).pdf";

const About = () => {
    const { t } = useTranslation("about");
    const info = [
        { label: t("birthday"), value: "23th Nov 1993" },
        { label: t("age"), value: "29 Yr" },
        { label: t("email"), value: "bear817005@gmail.com" },
        { label: t("phone"), value: "0986162360" },
    ];
    return (
        <div className='about section'>
            <div className='title'>
                <div className='title-inner'>{t("aboutMe")}</div>
            </div>
            <div className='subtitle'>{t("subtitle")}</div>
            <div className='main-area'>
                <div className='about-left'>
                    <img
                        src={aboutPic}
                        alt='aboutPic'
                    />
                </div>
                <div className='about-right'>
                    <div className='about-name'>{t("name")}</div>
                    <div className='about-position'>
                        <div>{t("a")}</div>
                        <div className='primary-text'>{t("position")}</div>
                        <div>{t("basedIn")}</div>
                        <div className='primary-text'>{t("taiwan")}</div>
                    </div>
                    <div className='about-intro'>{t("intro")}</div>
                    <div className='about-self-info'>
                        {info.map((e) => (
                            <div
                                className='info'
                                key={e.label}
                            >
                                <div className='info-label'>{e.label}</div>
                                <div className='info-value'>{e.value}</div>
                            </div>
                        ))}
                    </div>
                    <a
                        className='primaryBtn click-btn about-downloadCV'
                        href={cv}
                        download
                        target='_blank'
                        rel='noreferrer'
                    >
                        {t("downloadCV")}
                    </a>
                </div>
            </div>
        </div>
    );
};
export default About;
