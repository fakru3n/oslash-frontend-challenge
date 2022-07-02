import React, { useState, useEffect } from 'react';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import axios from 'axios';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcommingMovies, setUpcommingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get('/movie/popular');
      console.log('PM', getPopularMovies.data.results);
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
    // const requestUpcommingMovies = async () => {
    //   const getUpcommingMovies = await axios.get('/movie/upcoming');
    //   setUpcommingMovies(getUpcommingMovies.data.results);
    // };
    // requestUpcommingMovies();
    
  }, []);

  return (
    <>
      <div className='flex flex-col gap-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='bg-cyan-1000'>
          <div className='container mx-auto px-4'>
            <PosterSlider
              images={popularMovies} //popular movies array
              title='Premiers'
              subtitle='Select New release Movies'
              isDark={true}
            />
          </div>
        </div>
      </div>
      {/* <div className='flex flex-col gap-10 bg-gradient-to-r from-black-500 via-cyan-500 to-violet-500'>
        <PosterSlider
          images={upcommingMovies}
          title='Upcomming Movies'
          subtitle='Movies Yet to Come'
          isDark={false}
        />
      </div> */}
    </>
  );
};

export default HomePage;
