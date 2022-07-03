import { useEffect, useState } from "react";
import { useSeatStore } from "../store";
const Seat = ({col, row, soldedTicket}:{col:number, row:number, soldedTicket: any}) => {
    const [seatStatus, setSeatStatus] = useState('');
    const {counter, setSelectedSeats, delSelectedSeats } = useSeatStore();
    useEffect(()=>{
        if (!!soldedTicket?.filter((d: { row: number; col: number; })=>d.row===row&&d.col===col).length) {
            setSeatStatus('sold');
        }
    }, []);
    const handleSeatSelect = () => {
        if (seatStatus === "sold") return;
        if (seatStatus === '' && counter < 5) {
            setSeatStatus('selected');
            setSelectedSeats(JSON.stringify({row, col}));
        } else if (seatStatus === 'selected') {
            setSeatStatus('');
            delSelectedSeats(JSON.stringify({row, col}));
        }        
    }
    return (<div onClick={handleSeatSelect} className={`seat ${seatStatus}`}></div>)
};

export default Seat;