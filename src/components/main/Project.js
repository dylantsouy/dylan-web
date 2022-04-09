import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import project1 from "../../assets/images/DylanEnglish.gif";
import project2 from "../../assets/images/gif.gif";
import project3 from "../../assets/images/movie.gif";
import project5 from "../../assets/images/brick.gif";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import SwiperCore, { Navigation, Autoplay } from "swiper"; // Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
SwiperCore.use([Navigation, Autoplay]);

const Project = (props) => {
  const { t } = useTranslation("project");
  const projectSet = [
    {
      src: project1,
      text: t("project1"),
      date: "Dec, 2020",
      link: "https://dylanz-english-front.herokuapp.com/",
    },
    {
      src: project2,
      text: t("project2"),
      date: "Aug, 2020",
      link: "https://dygifsearch.herokuapp.com/",
    },
    {
      src: project3,
      text: t("project3"),
      date: "Aug, 2020",
      link: "https://dymoviesearch.herokuapp.com/",
    },
    {
      src: project5,
      text: t("project5"),
      date: "Sep, 2019",
      link: "https://codepen.io/bear817005/pen/PvVjRG",
    },
  ];
  const goRouter = (link) => {
    if (link) {
      window.open(link);
    } else {
    }
  };
  return (
    <div className="project section">
      <div className="title">
        <div className="title-inner">{t("myProjects")}</div>
      </div>
      <div className="subtitle">{t("subtitle")}</div>
      <div className="main-area">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          speed={10000}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          className="project-swiper"
        >
          {projectSet.length > 0 &&
            projectSet.map((e, index) => (
              <SwiperSlide
                key={index}
                className="project-item"
                onClick={() => goRouter(e.link)}
              >
                <div className="project-img">
                  <div
                    className="img-self"
                    style={{ backgroundImage: `url(${e.src})` }}
                  />
                  <div className="project-info">
                    <div className="project-text">{e.text}</div>
                    <div className="project-date">{e.date}</div>
                  </div>
                </div>
                <div className="rwd-text">{e.text}</div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Project;
