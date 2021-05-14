import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import SwiperCore, { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([EffectCoverflow]);

const Body = styled.div`
  width: 100px;
  text-align: center;
  transform-style: preserve-3d;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.grey};

  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  }

  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  }
`;

const NUMBERS = Array.from(Array(10).keys());

function Slider({ handleNumber, order, value }) {
  return (
    <Body>
      <Swiper
        className="swiper-container"
        effect="coverflow"
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        grabCursor={true}
        initialSlide={value}
        cubeEffect={{
          "shadow": true,
          "slideShadows": true,
          "shadowOffset": 20,
          "shadowScale": 0.94
        }}
        onSlideChange={(swiper) => handleNumber(order, NUMBERS[swiper.realIndex])}
      >
        {NUMBERS.map((number, index) => (
          <SwiperSlide key={index}>{number}</SwiperSlide>
        ))}
      </Swiper>
    </Body>
  );
}

Slider.propTypes = {
  handleNumber: PropTypes.func.isRequired,
  order: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default Slider;
