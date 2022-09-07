import { Link } from 'react-router-dom';
import { useState } from 'react';

const Seatcomponent = (props) => {
   
        function submitButton() {
            console.log('hej')
        }

        const [theBookedSeats, setTheBookedSeats] = useState([]);
 
        // let seat = props.props.chosenTime.map(theMovie => theMovie.seats.map(seat => seat.id));

        // let oneSeat = seat[0].map(oneSeat => oneSeat)
        // console.log('oneSeat', oneSeat)

        // let bookedSeat = props.props.chosenSeats.filter(oneBookedSeat => oneBookedSeat === oneSeat)

        function onClickAddClass(e, seat) {

            // let bookedSeat = props.props.chosenSeats.map(oneBookedSeat => setMarkedSeat(oneBookedSeat))

            if (e.target.className === 'oneSeat taken') {
                e.target.className = 'oneSeat taken'
            } else if (e.target.className === 'oneSeat free') {
                e.target.className = 'oneSeat booked';
                props.props.setChosenSeats([...props.props.chosenSeats, seat.id])
            } else {
                e.target.className = 'oneSeat free';
            }
        }

        console.log('theBookedSeats', theBookedSeats)

return (
    
    <div>
        <h1>Pick a seat or plenty!</h1>

        {props.props.chosenTime.map((theMovie) => (
            <div className='theSeats'>
                <form onSubmit={submitButton}>
                <div className='seatContainer'>
                    {theMovie.seats.map((seat) => (
                        
                        <div className={'oneSeat ' + (seat.availability ? 'free' : 'taken')} onClick={(e) => onClickAddClass(e, seat)}>{seat.id}</div>
                    ))}
                    </div>

                    <Link to={`/confirmation/${'bye'}`}><button className='submitButton' type='submit'>Boka!</button></Link>
                </form>
            </div>
        ))}
    </div>
        
    );
}
 
export default Seatcomponent;