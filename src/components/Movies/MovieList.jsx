import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({
    movies
}) => {
    return movies.map((m, i) =>
        <MovieCard key={i} movie={m} />)
}

export default MovieList