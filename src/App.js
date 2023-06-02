import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/layout/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import Booking from './components/movieDetail/Booking';

import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/card.scss"
import "./styles/movieList.scss"
import "./styles/booking.scss"


function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/:id"  element={<MovieDetail/>}></Route>
          <Route path="/booking"  element={<Booking/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
