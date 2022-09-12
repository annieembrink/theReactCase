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

    function generateMovie() {
        return props.props.chosenMovie[0].imageUrl
    }

    const howManySeatsAvailable = (seats) => {
        const arrayWithAvailability = seats.map(seat => seat.availability)

        for (let i = 0; i < arrayWithAvailability.length; i++) {
            let truthy = arrayWithAvailability.filter(s => s === true)

          return `Available seats: ${truthy.length}`
        }
    }
    return (
    <div className='theGreatTimeDiv'>

        <h2>{props.props.chosenMovie[0].movie}</h2>
        <img src={generateMovie()} alt="" />
        <div className="timeContainer">
            {props.props.chosenMovie.map(m => 
            <>
        <p className='timeLinks' onClick={() => props.props.setChosenTime(chosenTime(m.time))}>{m.time}:00 </p>
        
        <p>{howManySeatsAvailable(m.seats)}</p>
        </>

            )}

        </div>
        <button className='backToMovies' onClick={handleClick}>Go back</button>
    </div>
    );
}
 
export default Timecomponent;
