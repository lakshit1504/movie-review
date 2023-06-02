import React,{useEffect,useState} from 'react'
import skeleton ,{SkeletonTheme} from 'react-loading-skeleton'
import {Link} from "react-router-dom"

const Card = ({movie}) => {

  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  },[])

  let str=movie.show.summary.replace(/<[^>]*>/g,"");

  return (
    <div className='card'>
        { 
          isLoading ?
          <div className="cards">
              <SkeletonTheme color="#202020" highlightColor="#444">
                <skeleton height={300} duration={2} />
              </SkeletonTheme>

          </div>
          :
          <Link to={`/movie/${movie.show.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={movie.show.image.medium} alt='card'/>
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.show.name:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie.show.rating.average ?movie.show.rating.average:""} {movie.show.rating.average && <i className="fas fa-star" style={{color:"gold"}} />}</span>
                    </div>
                    <div className="card__description">{movie ? str.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>

          }
    </div>
  )
}

export default Card