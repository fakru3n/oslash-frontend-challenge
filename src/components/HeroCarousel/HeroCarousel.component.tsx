import { useState, useEffect } from 'react';
import HeroSlider from 'react-slick';
import axios from 'axios';
//Component
import { NextArrow, PrevArrow } from './Arrows.component';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMoviesStore } from '../../store';

const HeroCarousal = () => {
  const {movies: images} = useMoviesStore();
  const settingsLg = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '300px',
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {images.map((image: any, idx: number) => (
            <div key={`hs-${idx}`} className='w-full h-64 lg:h-80 py-3'>
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt='testing'
                className='w-full h-full rounded-md'
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className='hidden lg:block'>
        <HeroSlider {...settingsLg}>
          {images.map((image: any, idx: number) => (
            <div key={`hsh-${idx}`} className='w-full h-96 px-2 py-3'>
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt='testing'
                className='w-full h-full rounded-lg'
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
