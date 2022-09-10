import Moviescreencomponent from './Moviescreencomponent';
import { useNavigate } from 'react-router-dom';

const Seatcomponent = (props) => {


    const navigate = useNavigate();

        const submitButton = (e) => {
            e.preventDefault();
            if (props.props.marked.length > 0) {
                navigate('/confirmation')
            } else {
                alert('You have to choose at least one seat')
                console.log('choose seats')
            }
        }

        function handleGoBack() {
            props.props.setChosenTime([]);
            props.props.setMarked([])
            navigate('/time')
        }

        function handleClick(e, id) {

            if (e.target.className === 'oneSeat taken') {
                //do nothing
            } else {
                if (props.props.marked.filter(number => number === id).length) {
                    e.target.className = 'oneSeat free';
                    let newState = props.props.marked.filter(remove => remove != id)
                    props.props.setMarked(newState)
                } else {
                    e.target.className = 'oneSeat booked';
                    props.props.setMarked([...props.props.marked, id])
                }
            }
        }

return (
    
    <div>
        <h2>{props.props.chosenMovie[0].movie} at {props.props.chosenTime[0].time}:00</h2>

        {props.props.chosenTime.map((theMovie) => (
            <div className='theSeats'>
                <Moviescreencomponent/>
            
                <form onSubmit={submitButton}>
                <div className='seatContainer'>
                    {theMovie.seats.map((seat) => (
                        
                        <div id={seat.id} className={'oneSeat ' + (seat.availability ? 'free' : 'taken')} onClick={(e) => handleClick(e, seat)}>{seat.id + 1}</div>
                    ))}
                    </div>
                    <div className="colorMeaning">
                        <div className="free"></div>
                        <p>Free</p>
                        <div className="taken"></div>
                        <p>Taken</p>
                        <div className="booked"></div>
                        <p>Booked</p>
                    </div>

                        <button className='submitButton' type='submit'>Submit</button>
                        
                </form>
            </div>
        ))}
        <button onClick={handleGoBack} className="backToTime">Go back</button>
    </div>
        
    );
}
 
export default Seatcomponent;