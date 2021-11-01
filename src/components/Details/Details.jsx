import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

function Details() {
    //using redux store to get movie details and genre details to display on DOM
    const movieDetails = useSelector(store => store.movieDetailReducer);
    const genreDetails = useSelector(store => store.genreDetailReducer);
    const history = useHistory();

    //takes the user back to movie poster/home page 
    const backToHome = () => {
        history.push('/');
    }
    return (

        // {JSON.stringify(movieDetails)}
        // {JSON.stringify(genreDetails)}
        // mapping over the moviedetails array and movie genres array to display on DOM
        <div className="movie-details">
        <div>
            <h3>Movie Details</h3>
            {movieDetails.map((movie) =>
                <div>
                    <p> Movie Name: {movie.title} </p>
                    <p> Movie Description: {movie.description}</p>
                    <img src={movie.poster} />
                </div>
            )}
            <h3>Genre Details</h3>
            {genreDetails.map((genre) =>
                <div>
                    <p> {genre.name}</p>
                </div>
                
            )}
            {/* clicking this button will take you back to the movie poster page */}
            <button onClick={backToHome}>Back to Home</button>
        </div>
        </div>

    )
}

export default Details;