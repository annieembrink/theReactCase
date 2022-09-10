import { Link } from 'react-router-dom';
import Moviescreencomponent from './Moviescreencomponent';

const Moviecomponent = (props) => {

    const chosenObjects = (clickedMovie) => {
        const theChosenObjects = props.props.objects.filter(movie => movie.movie === clickedMovie)
        return theChosenObjects
    }

    function movieImg(m) {
        if (m === 'Titanic') {
            return props.props.objects[0].imageUrl
        } else if (m === 'A beautiful mind') {
            return props.props.objects[4].imageUrl
        } else if (m === 'Brokeback mountain') {
            return props.props.objects[8].imageUrl
        } else if (m === 'Utvandrarna') {
            return props.props.objects[12].imageUrl
        } else {
            return props.props.objects[16].imageUrl
        }
    }

    return (  

    <div>
   
        <div className="welcome">
            <h3>The Tiny Theatre</h3>
            <Moviescreencomponent/>
        </div>
 
        <div className='theMovies'>
            {props.props.movies.map(m => 
            <Link className='linkStyle' to={`/time`}>
                <div className='movieCard' onClick={() => props.props.setChosenMovie(chosenObjects(m))}>
                    <div className='movieLinks'>
                        <p>{m}</p>
                    </div>
                    <img src={movieImg(m)} alt=""></img>
                </div>
            </Link>)}
        </div>
    </div>
    
    );
}
 
export default Moviecomponent;