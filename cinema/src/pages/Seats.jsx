import { Link } from 'react-router-dom';

function Seats(props) {

    return (
        <div>
            <h1>Seats</h1>
            
            {props.chosenTime.map((theMovie) => (
                <div className='theSeats'>
                    <form>
                        {theMovie.seats.map((seat) => (
                            <div className='seatContainer'>
                                <div className='oneSeat'>{seat.availability ? 'true' : 'false'}</div>
                                
                            </div>
                        ))}
                    </form>
                </div>
            ))}
        </div>
    )
}

export default Seats; 