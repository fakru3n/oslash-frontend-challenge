import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { settings, Images } from '../components/config';
import FilmyPass from '../components/FilmyPass/FilmyPass.component';
import MovieHero from '../components/MovieHero/MovieHero.component';
import Poster from '../components/Poster/Poster.component';

const Movie = () => {
  const [moviedata, setMoviedata] = useState<any>([]);
  const movie_path = window.location.pathname;
  useEffect(() => {
    const callfunction = async () => {
      const getMovieName = await axios.get(`${movie_path}`);
      console.log(getMovieName)
      setMoviedata(getMovieName.data.belongs_to_collection);
    };
    callfunction();
  }, []);

  return (
    <>
      <MovieHero
        backdrop_path={moviedata.backdrop_path}
        poster_path={moviedata.poster_path}
      />
      <div className='my-12 container mx-auto max-w-full lg:w-1/2 lg:ml-64'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-grey-800 font-bold text-2xl'>
            Lorem ipsum dolor sit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            expedita assumenda dolores eum quaerat molestias ut reiciendis
            deleniti nemo distinctio velit nulla, sint eligendi, accusamus,
            possimus sunt ipsum architecto dolorem!
          </p>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-4'>Applicable offers</h1>
          <FilmyPass />
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-4'>Cast</h1>
          <Slider {...settings}>
            {Images.map((image: any, idx: number) => (
              <Poster key={`s2-${idx}`} {...image} isDark={false} isCircle={true} />
            ))}
          </Slider>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div>
          <h1 className='text-2xl font-bold mb-4'>Crew</h1>
          <Slider {...settings}>
            {moviedata.map((image: any, idx: number) => (
              <Poster key={`s3-${idx}`} {...image} isDark={false} isCircle={true} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Movie;
