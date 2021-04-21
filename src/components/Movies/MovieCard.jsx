import React from 'react'
import MovieRating from './MovieRating'

const movieCardStyle = {
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.19)',
    backgroundColor: '#FFF',
    height: 100,
    width: 200,
    cursor: 'pointer',
    margin: '10px auto',
    borderRadius: 5
}

const MovieCard = ({
    movie
}) => {
    return <div style={movieCardStyle}>
        <p>{movie.title}</p>
        <MovieRating rating={movie.rating} />
    </div>
}

export default MovieCard