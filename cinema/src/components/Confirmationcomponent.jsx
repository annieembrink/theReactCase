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

    function sortIt(a, b) {
        return (a-b)
    }

    function generateMovie() {
        return props.props.chosenMovie[0].imageUrl2
    }

    return (  
        <div className="theGreatConfirmationDiv" style={
            {backgroundImage: `url(${generateMovie()})`}
            }>
            {/* <img src={generateMovie()} alt="" /> */}
            <div className="gradient"></div>
            {/* <Navbar 
            chosenMovie={props.props.chosenMovie} setChosenMovie={props.props.setChosenMovie}
            /> */}
            <div className="headingBookingButton">
            <h3 className="thankYou">Thanks for your booking!</h3>
            <div className="confirmedBooking">
                <p>Movie: {props.props.chosenMovie[0].movie}</p>
                <p>Time: {props.props.chosenTime[0].time}:00</p>
                <p>Seats: {props.props.marked.map(seat => seat.id + 1).sort(sortIt).join(', ')}</p>
            </div>

            <button className="newBooking" onClick={handleClick}>New booking</button>
        </div>
        </div>
    );
}
 
export default Confirmationcomponent;