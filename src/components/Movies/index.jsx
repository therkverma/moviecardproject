import React, { useState } from 'react'
import movieJson from '../../constant/MovieService.json'
import MovieList from './MovieList'

const moviesContainer = {
    maxWidth: 700,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap'
}

const Movies = () => {
    const [movies, setMovies] = useState(movieJson)
    return !!movies && !!movies.length ?
        <div style={moviesContainer}>
            <MovieList movies={movies} />
        </div> :
        <h1>No Data Found</h1>
}

export default Movies