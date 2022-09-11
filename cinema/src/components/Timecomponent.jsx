import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Timecomponent = (props) => {

    const navigate = useNavigate();


    const chosenTime = (clickedTime) => {
        navigate('/seats')
        const chosenTimeObject = props.props.chosenMovie.filter(movie => movie.time === clickedTime)
        return chosenTimeObject
    }

    function handleClick() {
        props.props.setChosenMovie()
        navigate('/')
    }

    return (

    <div>

        <h2>{props.props.chosenMovie[0].movie}</h2>
        <div className="timeContainer">
            {props.props.chosenMovie.map(m => <p className='timeLinks' onClick={() => props.props.setChosenTime(chosenTime(m.time))}>
                        {m.time}:00</p>)}

            {/* <Link className='linkStyle' to={`/seats`}>
                <div className='timeFlex'>
                    <p className='timeLinks' onClick={() => props.props.setChosenTime(chosenTime(m.time))}>
                        {m.time}:00</p>
                </div>
            </Link>)} */}
            
        </div>
        <button className='backToMovies' onClick={handleClick}>Go back</button>

    </div>
    );
}
 
export default Timecomponent;
