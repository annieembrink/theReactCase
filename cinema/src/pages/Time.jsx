// import { Link } from 'react-router-dom';
import Timecomponent from "../components/Timecomponent"

function Time(props) {

    // const chosenTime = (clickedTime) => {
    //     const chosenTimeObject = props.chosenMovie.filter(movie => movie.time === clickedTime)
    //     return chosenTimeObject
    // }

    return (
        <div>
            <Timecomponent props={props}/>

            {/* <h1>Pick a time!</h1>
            
            {props.chosenMovie.map(m => <Link className='linkStyle' to={`/seats/${m.time}`}><div className='timeFlex'><p className='timeLinks' onClick={() => props.setChosenTime(chosenTime(m.time))}>{m.time}</p></div></Link>)} */}
  
        </div>
    )
}

{/* <p>{m.time}</p> */}

export default Time; 