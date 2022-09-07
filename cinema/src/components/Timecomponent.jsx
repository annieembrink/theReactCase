import { Link } from 'react-router-dom';

const Timecomponent = (props) => {

    const chosenTime = (clickedTime) => {
        const chosenTimeObject = props.props.chosenMovie.filter(movie => movie.time === clickedTime)
        return chosenTimeObject
    }

    return (

    <div>

        <h1>Pick a time!</h1>
        
        {props.props.chosenMovie.map(m => <Link className='linkStyle' to={`/seats/${m.time}`}><div className='timeFlex'><p className='timeLinks' onClick={() => props.props.setChosenTime(chosenTime(m.time))}>{m.time}</p></div></Link>)}

    </div>
    );
}
 
export default Timecomponent;
