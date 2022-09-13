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
        
        return props.props.chosenMovie[0].imageUrl2
    }

    const howManySeatsAvailable = (seats) => {
        const arrayWithAvailability = seats.map(seat => seat.availability)

        for (let i = 0; i < arrayWithAvailability.length; i++) {
            let truthy = arrayWithAvailability.filter(s => s === true)

          return `Available seats: ${truthy.length}`
        }
    }
    return (
    <div className='theGreatTimeDiv' style={
        {backgroundImage: `url(${generateMovie()})`}
        }>

        <div className="gradient"></div>

<div className="headingTimeSeats">
        <h2>{props.props.chosenMovie[0].movie}</h2>
        <div className="timeContainer">
            {props.props.chosenMovie.map(m => 
            <>
        <p className='timeLinks' onClick={() => props.props.setChosenTime(chosenTime(m.time))}>{m.time}:00 </p>
        
        <p>{howManySeatsAvailable(m.seats)}/10</p>
        </>

            )}
            </div>

        </div>
        <button className='backToMovies' onClick={handleClick}>Go back</button>
    </div>
    );
}
 
export default Timecomponent;

