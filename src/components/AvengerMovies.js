import React from "react"

const AvengerMovies = props => {
    return ( 
        <div className="movie-container">
            {props.movies.map(movie => <div key={movie}> {movie}</div>)}
        </div>
     );
}
 
export default AvengerMovies;