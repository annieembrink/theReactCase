import { Link } from 'react-router-dom';

function Seats(props) {

    function test() {
        console.log('hej')
    }

    return (
        <div>
            <h1>Seats</h1>
            
            {props.chosenTime.map((theMovie) => (
                <div className='theSeats'>
                    <form onSubmit={test}>
                        {theMovie.seats.map((seat) => (
                            <div className='seatContainer'>
                                <div className='oneSeat'>{seat.availability ? 'Upptagen' : 'Ledig'}</div>
                                
                            </div>
                        ))}
                        <button type='submit'>Boka!</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default Seats; 