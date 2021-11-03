import React,{FC} from 'react'
import { Movie } from '../services/Movie'

interface MovieProp{
    movie:Movie
}

const MovieCard:FC<MovieProp> =(props)=> {
    return (
        <div style={{ width: '50rem', background: 'grey',float:"left"}}>
                <h1 style={{textAlign:'center', padding: '1em' }}>{props.movie.episode_id}</h1>
                <h3>{props.movie.title}</h3>
            <div>
                {props.movie.opening_crawl}
                <h5 style={{textAlign:'center'}}>{props.movie.release_date}---{props.movie.director}---{props.movie.producer}</h5>
                
            </div>
        </div>
    )
}

export default MovieCard
