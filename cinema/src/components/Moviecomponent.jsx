import { useNavigate } from 'react-router-dom';
import Datecomponent from './Datecomponent';

const Moviecomponent = (props) => {

    const navigate = useNavigate();

    const chosenObjects = (clickedMovie) => {
        navigate('/time')
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

    <div className='theGreatMovieDiv' >

        <div className="backGroundDiv" style={{backgroundImage: `url(https://payload.cargocollective.com/1/11/367710/13568488/MOVIECLASSICSerikweb_2500_800.jpg)`}}>
            <div className="gradient"></div>
        </div>

        <h1>Movies today!</h1>
        <Datecomponent/>
        
        <div className='theMovies'>
            {props.props.movies.map(m => 
           
            <div className='movieCard'>
                    
                    <img src={movieImg(m)} alt="" onClick={() => props.props.setChosenMovie(chosenObjects(m))}></img>
                    <div className='movieLinks'>
                        <p>{m}</p>
                    </div>
            </div>
            )}
        </div>
    </div>
    
    );
}
 
export default Moviecomponent; 