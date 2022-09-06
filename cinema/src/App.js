import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import Movies from './pages/Movies';
import Seats from './pages/Seats';
import Confirmation from './pages/Confirmation';
import Time from './pages/Time';
import Moviecomponent from './components/Moviecomponent';
import Timecomponent from './components/Timecomponent';
import Seatcomponent from './components/Seatcomponent';
import Confirmationcomponent from './components/Confirmationcomponent';

function App() {

  const [objects, setObjects] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);
  const [chosenTime, setChosenTime] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then((response) => response.json())
    .then((data) => setObjects(data))
    .catch(err => console.log(err));
  }, []);

  const uniqueMovies = Array.from(
    new Set(objects.map(item => item.movie))
  )

  // const chooseMovie = (e) => {
  //   e.preventDefault();
  //   const chosenMovieObjects = objects.filter(movie => movie.movie === e.target.innerHTML)
  //   console.log(chosenMovieObjects)
  //   setChosenMovie(chosenMovieObjects)
  // }

  // const chooseTime = (e) => {
  //   e.preventDefault();
  //   const chosenTimeObject = chosenMovie.filter(movie => movie.time === e.target.innerHTML)
  //   setChosenTime(chosenTimeObject)

  //   const areSeatsAvailable = chosenTimeObject.map(seats => {
  //       return seats.seats.map(seat => seat.availability)
  //     })
  //     setCheckedSeat(areSeatsAvailable)
  // }

  // const clickedInput = (e) => {
  //   e.preventDefault();
  // }

  // const submitSeats = (e) => {
  //     e.preventDefault();
  //     console.log(e.target)
  // }

console.log('chosentime', chosenTime)

  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={ <Movies objects={objects} movies={uniqueMovies} setChosenMovie={setChosenMovie}/> }/>
        <Route path ="/time" element={ <Time chosenMovie={chosenMovie}/> }/>
        <Route path ="/time/:title" element={ <Time chosenMovie={chosenMovie} setChosenTime={setChosenTime}/> }/>
        <Route path ="/seats" element={ <Seats/> }/>
        <Route path ="/seats/:time" element={ <Seats chosenTime={chosenTime} setChosenSeats={setChosenSeats}/> }/>
        <Route path ="/confirmation" element={ <Confirmation/> }/>
      </Routes>
    </div>
  );
}

export default App;
