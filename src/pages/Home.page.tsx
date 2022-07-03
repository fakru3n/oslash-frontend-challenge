import React, { useState, useEffect } from 'react';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import axios from 'axios';
import Modal from '../modal/Modal';
import { useModalStore } from '../store';
import SeatLayout from '../layouts/SeatLayout.';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { isShown, toggleModal } = useModalStore();
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get('/movie/popular');
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  return (
    <>
      <div className='flex flex-col gap-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='bg-cyan-1000'>
          <div className='container mx-auto px-4'>
            <PosterSlider
              images={popularMovies} //popular movies array
              title='Select New release Movies'
              subtitle='Book tickets here by tap on the movie'
              isDark={true}
            />
          </div>
        </div>
      </div>
      <Modal handleClose={() => toggleModal} isOpen={isShown}>
        <SeatLayout />
      </Modal>
    </>
  );
};

export default HomePage;
