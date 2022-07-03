import { useEffect } from 'react';
import './layout.css';
const SeatLayout = () => {
    // useEffect(() => {
        
    // }, []);
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
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat sold"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat sold"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat sold"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                </div>
                <div className="row">
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat"></div>
                    <div className="seat sold"></div>
                    <div className="seat sold"></div>
                    <div className="seat sold"></div>
                    <div className="seat"></div>
                </div>
                <div className="screen"></div>
            </div>
            <p className="text">
                You have selected <span id="count">0</span> seat for a price of RS.
                <span id="total">0</span>
            </p>
        </>        
    )
}
export default SeatLayout;