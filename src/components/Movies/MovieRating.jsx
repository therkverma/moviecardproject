import React from 'react'

const raitingStyle = {
    display: 'flex',
    height: 20,
    width: '100%',
    justifyContent: 'center'
}

const MovieRating = ({
    rating = 0
}) => {
    return <div style={raitingStyle}>
        {
            (new Array(rating).fill(1)).map((rate, i) =>
                <img src={require('./star.png').default} alt="rating" key={i} />
            )}
    </div>
}

export default MovieRating