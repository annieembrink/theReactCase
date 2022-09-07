import { Link } from 'react-router-dom';

const Confirmationcomponent = (props) => {
    return (  
        <div>
            <h2>Tack för din bokning!</h2>
            <div>
                <p>Film: {props.props.chosenMovie[0].movie}</p>
                <p>Tid: {props.props.chosenTime[0].time}</p>
                {props.props.chosenSeats.map(seat => <p>Du har bokat följande platser: {seat}</p>)}
            </div>
        </div>
    );
}
 
export default Confirmationcomponent;