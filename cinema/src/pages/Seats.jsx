// import { Link } from 'react-router-dom';
import Seatcomponent from '../components/Seatcomponent';

function Seats(props) {

    // function test() {
    //     console.log('hej')
    // }

    // function clickedSeat(theSeat) {
    //     console.log(theSeat)
    //     console.log(theSeat.clicked)
    //     if (theSeat === true) {
    //         theSeat.className = 'taken'
    //     } 
    // }

    return (
        <div>
            <Seatcomponent props={props}/>

            {/* {props.chosenTime.map((theMovie) => (
                <div className='theSeats'>
                    <form onSubmit={test}>
                    <div className='seatContainer'>
                        {theMovie.seats.map((seat) => (
                            
                                <div className={'oneSeat ' + (seat.availability ? 'free' : 'taken')} onClick={() => seat.availability ? clickedSeat(seat) : clickedSeat(seat)}>{seat.id + 1}</div>
   
                        ))}
                        </div>
                        <Link to={`/confirmation/${'bye'}`}><button type='submit'>Boka!</button></Link>
                    </form>
                </div>
            ))} */}

        </div>
    )
}

export default Seats; 