import React from 'react'
import styles from './index.module.scss'
import CardMovie from './CardMovie'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ListMovie({data}) {
  console.log(data, 'popopopop');
  return (
    <div
      className={styles.section}
    >

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 8
          },
          350: {
            slidesPerView: 1.3,
            spaceBetween: 8
          },
          380: {
            slidesPerView: 1.4,
            spaceBetween: 8
          },
          480: {
            slidesPerView: 1.7,
            spaceBetween: 8
          },
          640: {
            slidesPerView: 1.7,
            spaceBetween: 8
          },
          780:{
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
