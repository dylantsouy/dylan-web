import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import Loading from "../common/Loading";
import BottomTop from "./BottomTop";
import TwoIntro from "../main/TwoIntro";

const Common = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    reload();
  }, []);

  const reload = () => {
    window.scrollTo(0, 0);
    document.querySelector(".banner-left").classList.add("active");
    document.querySelector(".banner-right").classList.add("active");
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
        document.querySelector(".navbar").classList.remove("have-color");
        document.querySelector(".home-nav").classList.add("active");
      } else {
        document.querySelector(".home-nav").classList.remove("active");
      }
      if (top + h / 2 > about && top + h / 2 < skill) {
        document.querySelector(".navbar").classList.add("have-color");
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
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  };
  
  return (
    <>
      {loading ? (
        <div className="loading-outer">
          <Loading />
        </div>
      ) : (
        ""
      )}
      <div
        className="container"
        style={{
          opacity: loading ? 0 : 1,
          position: loading ? "fixed" : "relative",
        }}
      >
        <Navbar />
        <>{children}</>
        <TwoIntro />
        <BottomTop />
        <Bottom />
      </div>
    </>
  );
};

export default Common;
