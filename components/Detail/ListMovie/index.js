import React from 'react'
import styles from './index.module.scss'
import CardMovie from './CardMovie'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ListMovie({data}) {
  return (
    <div
      className={styles.section}
    >
      <h3>More Like This</h3>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 8
          },
          350: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          540: {
            slidesPerView: 2.7,
            spaceBetween: 8
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 8
          },
          750:{
            slidesPerView: 3.5,
            spaceBetween: 8
          },
          850:{
            slidesPerView: 4,
            spaceBetween: 8
          },
          920:{
            slidesPerView: 4.5,
            spaceBetween: 8
          },
          1000:{
            slidesPerView: 5,
            spaceBetween: 8
          },
          1200:{
            slidesPerView: 5.7,
            spaceBetween: 8
          },
          1300:{
            slidesPerView: 6.7,
            spaceBetween: 8
          }
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          data.length ?
          data.map(detail => <SwiperSlide> <CardMovie detail={detail}/> </SwiperSlide>)
          :
          <span></span>
        }
      </Swiper>
    </div>
  )
}
