import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-router-dom"
import MovieList from './MovieList';

const Home = () => {

    const [movies,setMovies]=useState([])

    useEffect(()=>{
        fetch("https://api.tvmaze.com/search/shows?q=all").then(res =>res.json()).then(data=>setMovies(data))
    },[])

  return (
    <section className="home">
    <div className="poster">
      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
      >
       { movies.map( movie  =>  (
              <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.show.id}`} key={movie.show.id}>
              <div className="posterImage">
                  <img src={movie.show.image.original} alt='poster'/>
              </div>
              <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.show.name: ""}</div>
                  <div className="posterImage__runtime">
                      {movie ? movie.show.premiered : ""}
                      <span className="posterImage__rating">
                          {movie ? movie.show.rating.average :""}
                        { movie.show.rating.average && <i className="fas fa-star" style={{color:"gold"}} />}{" "}
                      </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.show.type : ""}</div>
              </div>
          </Link>
          ))}
      </Carousel>
        <MovieList/>
    </div>

   
        
    </section>
  )
}

export default Home