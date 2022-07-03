import { useEffect, useState } from 'react';
import { useSeatStore, useSelectedStore, useTicketBooking } from '../store';
import './layout.css';
import Loader from './Loader';
import Seat from './Seat';
const rows = 7;
const cols = 9;
const maxLimit = 5;
const SeatLayout = () => {
    const [seatMap, setSeatMap] = useState<any[]>([]);
    const { setToDefault, counter } = useSeatStore();
    const { getBookedTickets, isLoading, bookedTickets } = useTicketBooking();
    const {movie} = useSelectedStore();
    useEffect(() => {
        const seats: any = [];
        getBookedTickets(movie.id);
        for (let i = 0; i < rows; i++) {
            seats.push({row:i+1, cols:Array.from({length: cols}, (_, i) => i + 1)});
        }
        setSeatMap(seats);
        return () => {
            setToDefault();
        }
    }, [setSeatMap]);
    if (isLoading) return (<Loader />)
    return (
        <>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>Available</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div className="seat sold"></div>
                    <small>Sold</small>
                </li>
            </ul>
            <div className="container">
                {seatMap.map((seat, idx) => (
                    <div key={`row-${seat.row}`} className="row justify-center">
                        {seat.cols.map((col:number) => (
                            <Seat key={`col-${col}`} col={col} row={idx} soldedTicket={bookedTickets} />
                        ))}
                    </div>
                ))}
                <div className="screen"></div>
            </div>
            {counter ? <p className="text">
                You have selected <span id="count">{counter}</span> seat for a price of RS.
                <span id="total">{counter*120}</span>
            </p>: ''}
        </>        
    )
}
export default SeatLayout;