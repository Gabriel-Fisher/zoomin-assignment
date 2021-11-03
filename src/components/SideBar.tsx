import React, { useState, FC } from 'react'
import { getNodeMajorVersion } from 'typescript';
import { Movie, Movies } from '../services/Movie'
import MovieCard from './MovieCard';



interface MoviesProp {
    movies: Movies
}

const SideBar: FC<MoviesProp> = (props) => {

    const [selectedMovie, setSelectedMovie] = useState(JSON.parse(localStorage.getItem('favMovie')|| "{}").episode_id)
    const movies = props.movies
    const onSelected = (movieId: number) => {
        setSelectedMovie(movieId);
        localStorage.setItem('favMovie', JSON.stringify(movies.results.find(mov => mov.episode_id === movieId)))
    }
    return (
        <div>
            
            <div style={{width:'20rem', float: "left", padding: '1em'}} className='d-flex flex-column' >
                <h1>Select Your Favorite Movie</h1>
                {movies.results.map((movie: Movie) => {
                    return <button id={movie.episode_id? movie.episode_id.toString() : ''}
                    onClick={() => onSelected(movie.episode_id)}
                    style={movie.episode_id === selectedMovie ? {backgroundColor: '#008CBA' } :{} }>{movie.title}</button>
                })}
            </div>
            <div>
                {movies.results.map((movie: Movie) => {
                    if (selectedMovie === movie.episode_id)
                        return <MovieCard movie={movie}></MovieCard>
                })}
            </div>
        </div>

    )
}

export default SideBar
