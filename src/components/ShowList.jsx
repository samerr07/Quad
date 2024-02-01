import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./showList.scss"

const ShowList = () => {

    const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then((data) => setShows(data));
    //   console.log(setShows(data))
  }, []);
  return (
    <div className='showLi'>
      <h1>TV Shows</h1>
        <div className="showsTv">
        {shows.map((show) => (
          <div key={show.show.id}>
            <Link to={`/show/${show.show.id}`} className='card'>
            <img src={show.show.image?.medium} alt="Img not availabke" />
              <h1>{show.show.name}</h1>
              <p>Language : {show.show.language} </p>
              <p>Rating :{show.show.rating.average}</p>
              <p>{show.show.premiered}</p>
              <p>Category : {show.show.genres}</p>
              <button><a href={`/show/${show.show.id}`}>Click Here</a></button>
            </Link>
          </div>
        ))}
        </div>
        
      
    </div>
    
  )
}

export default ShowList
