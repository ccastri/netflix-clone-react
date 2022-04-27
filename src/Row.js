import { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css"

const base_url = "https://image.tmdb.org./t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // Render every single time when the app is fetching data
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])
    // console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">

                {
                    movies.map(poster => (
                        <img
                            key={poster.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}/${isLargeRow ? poster.poster_path : poster.backdrop_path}`}
                            alt={poster.name} />
                    )
                    )}
            </div>
        </div>
    )
}

export default Row