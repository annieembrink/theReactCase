import { Link } from 'react-router-dom';

const Moviecomponent = (props) => {

    const chosenObjects = (clickedMovie) => {
        const theChosenObjects = props.props.objects.filter(movie => movie.movie === clickedMovie)
        return theChosenObjects
    }
    
    return (  

    <div>
        <h1>Pick a movie!</h1>

        {props.props.movies.map(m => <Link className='linkStyle' to={`/time/${m}`}><div className='movieFlex' onClick={() => props.props.setChosenMovie(chosenObjects(m))}><p className='movieLinks'>{m}</p></div></Link>)}
    </div>
    
    );
}
 
export default Moviecomponent;