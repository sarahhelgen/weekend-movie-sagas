
import React from 'react';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import Button from '@mui/material/Button';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    //on page load, fetch movie list from server/db. this dispatch will trigger
    // the fetchallmovies saga, which will pull the data from the db and then trigger
    //the movies reducer to display the data on the DOM.
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

        //on click of a movie poster, dispatching an action to sagas with the movieId
        //and then taking the user to the movie detail page
    const viewSelectedMovie = (movieId) => {
        console.log('in viewSelectedMovie'); //click handler is working
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
        dispatch({ type: 'FETCH_GENRE_DETAILS', payload: movieId });
        //payload is the movieId, need to fetch from both movie and genre routers
        history.push('/details');
    }
    //will take the user to the add movie page on click of the button
    const addMoviePage = () => {
        history.push('/addmovies');
    }

    return (
        <main>
            {/* <h1>MovieList</h1> */}
            <Button variant="contained" onClick={addMoviePage}>Add a Movie </Button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={(event) => viewSelectedMovie(movie.id)}>
                            <h3 className="movie-title">{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;