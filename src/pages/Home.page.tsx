import { useState, useEffect } from 'react';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import Modal from '../modal/Modal';
import { useModalStore, useMoviesStore, useTicketBooking } from '../store';
import SeatLayout from '../layouts/SeatLayout.';
import { Toaster } from "react-hot-toast";
import { notify } from "../toaster/notify";
const HomePage = () => {
  const { isShown, toggleModal } = useModalStore();
  const { movies: popularMovies } = useMoviesStore();
  const { doBookTickets } = useTicketBooking();
  const bookingHandler = (data: any) => {
    doBookTickets(data);
    toggleModal();
    notify();
  }
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
      <Modal handleBooking={bookingHandler} handleClose={() => toggleModal} isOpen={isShown}>
        <SeatLayout />
      </Modal>
      <Toaster />
    </>
  );
};

export default HomePage;
