import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"

const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        updateData();
        // window.scrollTo(0,0)
    }, [])

    const updateData = async ()=> {
        const url = `https://api.tvmaze.com/shows/${id}`; 
        
        let data = await fetch(url);
        let parsedData = await data.json()
        setMovie(parsedData)
    }



    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="banner" src={ currentMovieDetail?.image?.original } alt="banner" />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img src={  currentMovieDetail?.image?.medium} alt="poster" />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail?.name}</div>
                        <div className="movie__tagline">{currentMovieDetail?.type}</div>
                        <div className="movie__rating">
                            {currentMovieDetail?.rating?.average ?  currentMovieDetail?.rating?.average : "4.1"} <i className="fas fa-star" style={{color:"gold"}}/>
                            <span className="movie__voteCount">{ "(" + currentMovieDetail?.externals?.thetvdb + ") votes" }</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail?.runtime + " mins"}</div>
                        <div className="movie__releaseDate">{"Release date: " + currentMovieDetail?.premiered }</div>
                        <div className="movie__genres">
                            {
                                
                                currentMovieDetail?.genres?.map(genre => (
                                    <><span className="movie__genre">{genre} </span> </>
                                    
                                )) 
                             
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{ currentMovieDetail?.summary?.replace(/<[^>]*>/g,"") }</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    <div className="booking movie__Button ">
                    <Link style={{textDecoration: "none"}} to="/booking">Book Ticket</Link>
                    </div>
                }
                {
                     <a rel="noreferrer" href={currentMovieDetail?.network?.officialSite} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Movie Official site <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    <a rel="noreferrer" href={"https://www.imdb.com/title/" + currentMovieDetail?.externals?.imdb} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Country</div>
            <div className="movie__production">
                {
                    <span>{currentMovieDetail?.network?.country?.name}</span>
                }
            </div>
                
        </div>
    )
}

export default MovieDetail