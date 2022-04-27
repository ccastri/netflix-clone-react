import axios from './axios'
import React, { useEffect, useState } from 'react'
import requests from './request'
import './Banner.css'

const base_url = "https://image.tmdb.org./t/p/original/"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData();
    }, [])
    // console.log(movie);
    // console.log(`https://image.tmdb.org./t/p/original${movie.backdrop_path}`);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org./t/p/original${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <div className="banner__title">
                    <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                </div>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className='banner__description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner