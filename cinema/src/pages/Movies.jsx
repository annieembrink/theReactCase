import { Link } from 'react-router-dom';

function Movies(props) {

    // const uniqueMovies = Array.from(
    //     new Set(props.objects.map(item => item.movie))
    //   )

    const chosenObjects = (clickedMovie) => {
        const theChosenObjects = props.objects.filter(movie => movie.movie === clickedMovie)
        return theChosenObjects
    }

    return (
        <div>
            <h1>Movies</h1>

            {props.movies.map(m => <Link className='linkStyle' to={`/time/${m}`}><div className='movieFlex' onClick={() => props.setChosenMovie(chosenObjects(m))}><p className='movieLinks'>{m}</p></div></Link>)}

            {/* {props.movies.map(m => <div className='movieFlex'><p className='movieLinks' onClick={() => props.setChosenMovie(chosenObjects(m))}><Link className='linkStyle' to={`/time/${m}`}>{m}</Link></p></div>)} */}
        </div>
        
    )
}

export default Movies; 