import { Link } from 'react-router-dom';

function Movies(props) {

    const uniqueMovies = Array.from(
        new Set(props.objects.map(item => item.movie))
      )


    const chosenObjects = (clickedMovie) => {
        const theChosenObjects = props.objects.filter(movie => movie.movie === clickedMovie)
        return theChosenObjects
    }

    return (
        <div>
            <h1>Movies</h1>

            {props.movies.map(m => <p onClick={() => props.setChosenMovie(chosenObjects(m))}><Link to={`/time/${m}`}>{m}</Link></p>)}
        </div>
    )
}

export default Movies; 