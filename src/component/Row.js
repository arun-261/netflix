import React,{useEffect,useState} from 'react'
import instance from '../instance'
import './Row.css';

function Row({title, fetchUrl, isLargeRow}) {

    const[movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    // function for api call
    async function fetchMovies(){
        const request =await instance.get(fetchUrl)
        setMovies(request.data.results);
    }
    console.log(movies);

    useEffect(()=>{
        fetchMovies()
    },[])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movie_row'>
            {
                movies.map((movie)=>(
                    <img className={`movie_poster  ${isLargeRow && 'movie_row_poster'}`} 
                    src={`${base_url}${isLargeRow?movie.poster_path: movie.backdrop_path}`}
                    alt={movie.original_title}/>
                ))
            }
        </div>
    </div>
  )
}

export default Row