import HomePage from './pages/Home.page';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DefaultLayout from './layouts/Default.layout';
import { useMoviesStore } from './store';
import { useEffect } from 'react';

export const App = () => {
  const {fetchMovies} = useMoviesStore();
  useEffect(() => {
      fetchMovies();
  },[fetchMovies]);

   return (
    <Router>
      <Routes>
        <Route path='/' element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        } />
      </Routes>
    </Router>
  );
}
