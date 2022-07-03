import create from "zustand";
import axios from 'axios';
//axios default settings
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

interface MoviesState {
  movies: [],
  fetchMovies: () => void
}

const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],
  fetchMovies: async () => {
    const response = await axios.get('/movie/now_playing');
    set({movies: response.data.results})
  }
}))

interface ModalState {
    isShown: boolean;
    toggleModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
    isShown: false,
    toggleModal: () => set((state) => ({...state, isShown: !state.isShown}))
}))


interface smState {
  movie: any
  setMovie: (movie: any) => void
}

const useSelectedStore = create<smState>((set)=>({
  movie: null,
  setMovie:(movie) => set((state) => {
    return { ...state, movie}
  })
}))

interface seatState {
  counter: number,
  selectedSeats: string[],
  setSelectedSeats: (seat: string) => void,
  delSelectedSeats: (seat: string) => void,
  setToDefault: () => void
}

const useSeatStore = create<seatState>((set)=>({
  counter: 0,
  selectedSeats: [],
  setSelectedSeats: (seat) => set((state) => ({
    ...state,
    selectedSeats: [...state.selectedSeats, seat],
    counter: state.counter + 1
  })),
  delSelectedSeats: (seat) => set((state) => ({
    ...state, 
    selectedSeats: state.selectedSeats.filter(s=> s!==seat),
    counter: state.counter - 1
  })),
  setToDefault: () => set((state) => ({...state, counter: 0, selectedSeats:[]}))
}))

interface booking {
  bookedTickets: any,
  getBookedTickets: (id: string) => void,
  doBookTickets: (data:any) => void,
  isLoading: boolean
}

const useTicketBooking = create<booking>((set)=>({
  bookedTickets: null,
  isLoading: false,
  doBookTickets: async (data) => {
    await axios.post("https://fakru-mw-default-rtdb.firebaseio.com/booking.json", data);
  },
  getBookedTickets: async (id) => {
    set({isLoading: true});
    const response = await axios.get(`https://fakru-mw-default-rtdb.firebaseio.com/booking.json?id=${id}`);
    const data = await response.data;
    const bookedSeats:any = {};
    for (let key in data) {
      const movieId = data[key].id;
      if (!bookedSeats[movieId]) bookedSeats[movieId] = [];
      bookedSeats[data[key].id].push(...data[key].seats)
    }
    set({bookedTickets: bookedSeats[id], isLoading: false});
  }
}))

export {
  useModalStore,
  useMoviesStore,
  useSelectedStore,
  useSeatStore,
  useTicketBooking
};