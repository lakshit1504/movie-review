import React, {useEffect, useState} from "react"
import Cards from "../home/Card"
import "../../styles/movieDetail.scss"




const MovieList = () => {

    const [movieList, setMovieList] = useState([])
 

    const getData = () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
        .then(res => res.json())
        .then(data => setMovieList(data))
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className="movie__list">
            <h2 className="list__title">Popular Movies</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                        
                    ))
                }
            </div>
        </div>
  )
}

export default MovieList