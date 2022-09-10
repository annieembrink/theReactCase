// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const Confirmationcomponent = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        props.props.setChosenMovie()
        props.props.setChosenTime()
        props.props.setChosenSeats()
        props.props.setMarked([])
        navigate('/')
    }

    return (  
        <div>
            {/* <Navbar 
            chosenMovie={props.props.chosenMovie} setChosenMovie={props.props.setChosenMovie}
            /> */}
            <h2 className="thankYou">Thanks for your booking!</h2>
            <div className="confirmedBooking">
                <p>Movie: {props.props.chosenMovie[0].movie}</p>
                <p>Time: {props.props.chosenTime[0].time}:00</p>
                <p>Seats: {props.props.marked.map(seat => seat.id + 1).join(', ')}</p>
            </div>

            <button className="newBooking" onClick={handleClick}>New booking</button>
        </div>
    );
}
 
export default Confirmationcomponent;