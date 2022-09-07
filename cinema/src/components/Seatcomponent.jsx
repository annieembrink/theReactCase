import { Link } from 'react-router-dom';

const Seatcomponent = (props) => {
   
        function test() {
            console.log('hej')
        }
    
        // function clickedSeat(theSeat) {
        //     console.log(theSeat)
        //     console.log(theSeat.clicked)
        //     if (theSeat === true) {
        //         theSeat.className = 'taken'
        //     } 
        // }

        let seat = props.props.chosenTime.map(theMovie => theMovie.seats.map(seat => seat.id));

        let oneSeat = seat.map(oneSeat => oneSeat)

        // console.log('seat', seat, 'oneSeat', oneSeat)

        // let isMarked = props.props.chosenSeats.filter(id => id === oneSeat.map(seat => seat))
        // console.log('isMarked', isMarked)
    
return (
    
    <div>
        <h1>Pick a seat or plenty!</h1>

        {props.props.chosenTime.map((theMovie) => (
            <div className='theSeats'>
                <form onSubmit={test}>
                <div className='seatContainer'>
                    {theMovie.seats.map((seat) => (
                        
                        <div className={'oneSeat ' + (seat.availability ? 'free' : 'taken')} onClick={() => seat.availability ? props.props.setChosenSeats([...props.props.chosenSeats, seat.id]) : props.props.setChosenSeats([...props.props.chosenSeats, seat.id])}>{seat.id + 1}</div>

                        // <div className={'oneSeat ' + (seat.availability ? 'free' : 'taken')} onClick={() => seat.availability ? clickedSeat(seat) : clickedSeat(seat)}>{seat.id + 1}</div>
                    ))}
                    </div>

                    <Link to={`/confirmation/${'bye'}`}><button type='submit'>Boka!</button></Link>
                </form>
            </div>
        ))}
    </div>
        
    );
}
 
export default Seatcomponent;