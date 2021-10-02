import { getThemeProps } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

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

    const viewSelectedMovie = (movieId) => {
        console.log('in viewSelectedMovie'); //click handler is working
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: movieId });
        dispatch({ type: 'FETCH_GENRE_DETAILS', payload: movieId });
        //payload is the movieId, need to fetch from both movie and genre routers
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={(event) => viewSelectedMovie(movie.id)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;