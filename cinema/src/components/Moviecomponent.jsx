import { Link } from 'react-router-dom';

const Moviecomponent = (props) => {

    const chosenObjects = (clickedMovie) => {
        const theChosenObjects = props.props.objects.filter(movie => movie.movie === clickedMovie)
        return theChosenObjects
    }
    
    // let theMovieImg = props.props.objects[0].imageUrl;

    // console.log(theMovieImg)

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
            <h1>Welcome to the cinema!</h1>
            <h2>Pick a movie!</h2>
        </div>

        
        
        <div className='theMovies'>
            {props.props.movies.map(m => <Link className='linkStyle' to={`/time/${m}`}>
                <div className='movieCard' onClick={() => props.props.setChosenMovie(chosenObjects(m))}>
                <p className='movieLinks'>{m}</p>
                <img src={movieImg(m)} alt=""></img>
                </div></Link>)}
        </div>
    </div>
    
    );
}
 
export default Moviecomponent;