import React, { useState, useEffect } from 'react'
import instance from '../instance';
import requests from '../request';
import './Banner.css'

function Banner() {

    const [movies, setMovies] = useState([])

    // function for api call
    async function fetchMovies() {
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovies(request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]);
    }
    console.log(movies);

    useEffect(() => {
        fetchMovies()
    }, [])


    // function truncate

    function truncate(str, n){
      return  str?.length>n? str?.substring(0,n-1)+"......": str;
    }

    return (
        <div className='banner'
            style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
            }}
        >

            <div className='banner_content'>
                    <h1 className='banner_title'>
                        {movies?.name }
                    </h1>
                    <h1  className='banner_desc'>
                    {truncate(movies?.overview,150 )}
                    </h1>
            </div>
        </div>
    )
}

export default Banner