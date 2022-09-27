import React from "react";
import { useTranslation } from "../../langs/useTranslation";
import project1 from "../../assets/images/DylanEnglish.gif";
import project2 from "../../assets/images/gif.gif";
import project3 from "../../assets/images/movie.gif";
import project4 from "../../assets/images/draw.png";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import SwiperCore, { Navigation, Autoplay } from "swiper"; // Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
SwiperCore.use([Navigation, Autoplay]);

const Project = () => {
    const { t } = useTranslation("project");
    const projectSet = [
        {
            src: project4,
            text: t("project4"),
            date: "Sep, 2022",
            link: "https://dylantsouy.github.io/draw-flow-list/#/dashboard/",
            new: true,
        },
        {
            src: project1,
            text: t("project1"),
            date: "Dec, 2020",
            link: "https://dylanz-english-front.herokuapp.com/",
            new: false,
        },
        {
            src: project2,
            text: t("project2"),
            date: "Aug, 2020",
            link: "https://dygifsearch.herokuapp.com/",
            new: false,
        },
        {
            src: project3,
            text: t("project3"),
            date: "Aug, 2020",
            link: "https://dymoviesearch.herokuapp.com/",
            new: false,
        },
    ];
    const goRouter = (link) => {
        if (link) {
            window.open(link);
        }
    };
    return (
        <div className='project section'>
            <div className='title'>
                <div className='title-inner'>{t("myProjects")}</div>
            </div>
            <div className='subtitle'>{t("subtitle")}</div>
            <div className='main-area'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
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
                    }}
                    className='project-swiper'
                >
                    {projectSet.length > 0 &&
                        projectSet.map((e) => (
                            <SwiperSlide
                                key={e.text}
                                className='project-item'
                                onClick={() => goRouter(e.link)}
                            >
                                <div className='project-img'>
                                    {e.new && <div className='badge'>New</div>}
                                    <div
                                        className='img-self'
                                        style={{
                                            backgroundImage: `url(${e.src})`,
                                        }}
                                    />
                                    <div className='project-info'>
                                        <div className='project-text'>
                                            {e.text}
                                        </div>
                                        <div className='project-date'>
                                            {e.date}
                                        </div>
                                    </div>
                                </div>
                                <div className='rwd-text'>{e.text}</div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
};
export default Project;
