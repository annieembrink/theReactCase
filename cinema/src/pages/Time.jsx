import { Link } from 'react-router-dom';

function Time(props) {
    return (
        <div>
            <h1>Time</h1>
            {/* <p>{props.chosenMovie}</p> */}
            {props.chosenMovie.map(m => <p onClick={() => props.setChosenTime(m.time)}><Link to={`/seats/${m.time}`}>{m.time}</Link></p>)}
  
        </div>
    )
}

{/* <p>{m.time}</p> */}

export default Time; 