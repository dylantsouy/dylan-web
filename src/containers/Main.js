import React from "react";
import About from "../components/main/About";
import Banner from "../components/main/Banner";
// import Skill from "../components/main/Skill";
import Skill from "../components/main/Skill2";
import Project from "../components/main/Project";
import Contact from "../components/main/Contact";

const Main = () => {
  window.addEventListener("scroll", function () {
    const top = document.documentElement.scrollTop;
    const home = document.querySelector(".home").offsetTop;
    const about = document.querySelector(".about").offsetTop;
    const skill = document.querySelector(".skill").offsetTop;
    const project = document.querySelector(".project").offsetTop;
    const contact = document.querySelector(".contact").offsetTop;
    const bottom = document.querySelector(".bottom").offsetTop;
    const h = window.screen.height;

    if (top + h / 2 > home && top + h / 2 < about) {
      document.querySelector(".home-nav").classList.add("active");
    } else {
      document.querySelector(".banner-right").classList.add("active");
      document.querySelector(".home-nav").classList.remove("active");
    }
    if (top + h / 2 > about && top + h / 2 < skill) {
      document.querySelector(".about-left").classList.add("active");
      document.querySelector(".about-name").classList.add("active");
      document.querySelector(".about-position").classList.add("active");
      document.querySelector(".about-intro").classList.add("active");
      document.querySelector(".about-self-info").classList.add("active");
      document.querySelector(".about-downloadCV").classList.add("active");
      document.querySelector(".about-nav").classList.add("active");
    } else {
      document.querySelector(".about-nav").classList.remove("active");
    }
    if (top + h / 2 > skill && top + h / 2 < project) {
      document.querySelector(".skill-nav").classList.add("active");
      document.querySelector(".skill-bar-value1").classList.add("active");
      document.querySelector(".skill-bar-value2").classList.add("active");
      document.querySelector(".skill-bar-value3").classList.add("active");
      document.querySelector(".skill-bar-value4").classList.add("active");
    } else {
      document.querySelector(".skill-nav").classList.remove("active");
    }
    if (top + h / 2 > project && top + h / 2 < contact) {
      document.querySelector(".project-nav").classList.add("active");
      document.querySelector(".project-swiper").classList.add("active");
    } else {
      document.querySelector(".project-nav").classList.remove("active");
    }
    if (top + h / 2 > contact && top + h / 2 < bottom) {
      document.querySelector(".contact-nav").classList.add("active");
      document.querySelector(".contact").classList.add("active");
    } else {
      document.querySelector(".contact-nav").classList.remove("active");
    }
  });
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Banner />
      <About />
       <Skill /> 
      <Project />
      <Contact />
    </>
  );
};
export default Main;
