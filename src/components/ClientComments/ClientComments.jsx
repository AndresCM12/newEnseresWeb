import "./ClientComments.scss";
import userImage from "../../images/comment-dummy.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import { Navigation } from "swiper";

export default function ClientComments() {
  return (
    <motion.div
      transition={{ ease: "easeOut", duration: 1.5 }}
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      className="comments--wrapper"
    >
      <div className="comments--container">
        <h1>Conoce lo que dicen</h1>
        <h1>nuestros clientes</h1>

        <Swiper
          navigation={{ nextEl: "#arrowRight", prevEl: "#arrowLeft" }}
          modules={[Navigation]}
          loop={true}
          speed={1100}
          spaceBetween={40}
          slidesPerView={"auto"}
          id="swiperContainer"
        >
          <SwiperSlide
            data-cursor="-black"
            data-cursor-text="Desliza"
            className="card"
          >
            <img src={userImage} alt="" />
            <div className="text--wrapper">
              <p>
                Comentarios positivos de clientes y recomendaciones sobre los
                servicios
              </p>
              <h6>America Perez</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide
            data-cursor="-black"
            data-cursor-text="Desliza"
            className="card"
          >
            <img src={userImage} alt="" />
            <div className="text--wrapper">
              <p>
                Comentarios positivos de clientes y recomendaciones sobre los
                servicios
              </p>
              <h6>America Perez</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide
            data-cursor="-black"
            data-cursor-text="Desliza"
            className="card"
          >
            <img src={userImage} alt="" />
            <div className="text--wrapper">
              <p>
                Comentarios positivos de clientes y recomendaciones sobre los
                servicios
              </p>
              <h6>America Perez</h6>
            </div>
          </SwiperSlide>

          <div className="arrows--wrapper">
            <div
              data-cursor-text="Click"
              id="arrowLeft"
              className="arrow--left"
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </div>
            <div
              data-cursor-text="Click"
              id="arrowRight"
              className="arrow--right"
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </Swiper>
      </div>
    </motion.div>
  );
}
