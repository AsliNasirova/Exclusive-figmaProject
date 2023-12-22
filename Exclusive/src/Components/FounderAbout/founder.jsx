import React from "react";
import "./founder.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Founder() {
  return (
    <section id="founder-about">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={{ Pagination }}
        className="mySwiper"
      >
        <SwiperSlide className="text_image_founder">
          <div>
            <div className="image_founder">
              <img src="../../../imgs/image 46.png" alt="" />
            </div>
            <div className="text_founder">
              <h4>Tom Cruise</h4>
              <p>Founder & chairman </p>
            </div>
            <div className="icon_founder">
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text_image_founder">
          <div>
            <div className="image_founder">
              <img src="../../../imgs/image 47.png" alt="" />
            </div>
            <div className="text_founder">
              <h4>Tom Cruise</h4>
              <p>Founder & chairman </p>
            </div>
            <div className="icon_founder">
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text_image_founder">
          <div>
            <div className="image_founder">
              <img src="../../../imgs/image 51.png" alt="" />
            </div>
            <div className="text_founder">
              <h4>Emma Watson</h4>
              <p>Managing Director </p>
            </div>
            <div className="icon_founder">
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text_image_founder">
          <div>
            <div className="image_founder">
              <img src="../../../imgs/image 46.png" alt="" />
            </div>
            <div className="text_founder">
              <h4>Will Smith</h4>
              <p>Product Designer </p>
            </div>
            <div className="icon_founder">
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Founder;
