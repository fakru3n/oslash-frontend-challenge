import axios from 'axios';
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DefaultLayout from './layouts/Default.layout';
import MovieLayout from './layouts/Movie.layout';

//axios default settings
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

export const App = () => {
   return (
    <Router>
      <Routes>
        <Route path='/' element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        } />
        <Route path='/movie/:id' element={
          <MovieLayout>
            <MoviePage/>
          </MovieLayout>
        } />
        <Route path='/plays' element={
          <DefaultLayout/>
        } />
      </Routes>
    </Router>
  );
}
