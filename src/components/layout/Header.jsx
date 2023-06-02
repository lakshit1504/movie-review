import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" /></Link>
        </div>
        <div className="headerRight"></div>
    </div>
  )
}

export default Header