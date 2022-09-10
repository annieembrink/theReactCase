import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import Movies from './pages/Movies';
import Seats from './pages/Seats';
import Confirmation from './pages/Confirmation';
import Time from './pages/Time';
import Datecomponent from './components/Datecomponent';
import Moviescreencomponent from './components/Moviescreencomponent';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {

  const [objects, setObjects] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);
  const [chosenTime, setChosenTime] = useState([]);
  const [chosenSeats, setChosenSeats] = useState([]);
  const [marked, setMarked] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then((response) => response.json())
    .then((data) => setObjects(data))
    .catch(err => console.log(err));
  }, []);

  const uniqueMovies = Array.from(
    new Set(objects.map(item => item.movie))
  )

  console.log('chosenMovie', chosenMovie)
  console.log('chosenTime', chosenTime)
  console.log('chosenSeats', chosenSeats)
  console.log('marked', marked)

  return (
    <div className="App">
    {/* <Datecomponent/> */}
    <Header/>
      <Routes>
        <Route path ="/" element={ <Movies objects={objects} movies={uniqueMovies} setChosenMovie={setChosenMovie} Moviescreencomponent={<Moviescreencomponent/>}/> }/>
        {/* <Route path ="/time" element={ <Time chosenMovie={chosenMovie}/> }/> */}
        <Route path ="/time" element={ <Time chosenMovie={chosenMovie} setChosenTime={setChosenTime} setChosenMovie={setChosenMovie}/> }/>
        {/* <Route path ="/seats" element={ <Seats/> }/> */}
        <Route path ="/seats" element={ <Seats chosenTime={chosenTime} 
        chosenSeats={chosenSeats} 
        setChosenTime={setChosenTime}
        setChosenSeats={setChosenSeats} 
        chosenMovie={chosenMovie} 
        Moviescreencomponent={<Moviescreencomponent/>} marked={marked} 
        setMarked={setMarked}/> }/>
        <Route path ="/confirmation" element={ 
        <Confirmation 
          chosenMovie={chosenMovie} 
          chosenTime={chosenTime} 
          chosenSeats={chosenSeats} 
          marked={marked} 
          setMarked={setMarked} 
          setChosenSeats={setChosenSeats} 
          setChosenMovie={setChosenMovie} 
          setChosenTime={setChosenTime} 
        /> }/>
      </Routes>
    </div>
  );
}

export default App;
