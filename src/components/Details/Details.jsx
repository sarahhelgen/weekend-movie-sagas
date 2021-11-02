import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

function Details() {
    //using redux store to get movie details and genre details to display on DOM
    const movieDetails = useSelector(store => store.movieDetailReducer);
    const genreDetails = useSelector(store => store.genreDetailReducer);
    const history = useHistory();

    const useStyles = makeStyles({
        movieDetails: {
            fontFamily: 'Jost'
        }

    })
    const classes = useStyles();

    //takes the user back to movie poster/home page 
    const backToHome = () => {
        history.push('/');
    }
    return (

        // {JSON.stringify(movieDetails)}
        // {JSON.stringify(genreDetails)}
        // mapping over the moviedetails array and movie genres array to display on DOM
        
        <div>
            <Box className={classes.movieDetails}>
            <h3>Movie Details:</h3>
            {movieDetails.map((movie) =>
                <Box p={2} className={classes.movieDetails}>
                <div>
                    <p> Movie Name: {movie.title} </p>
                    <p> Movie Description: {movie.description}</p>
                    <img src={movie.poster} />
                </div>
                </Box>
            )}
            <h3>Genre Details:</h3>
            {genreDetails.map((genre) =>
                <div>
                    <p> {genre.name}</p>
                </div>
                
            )}
            {/* clicking this button will take you back to the movie poster page */}
            <Button p={2} variant="contained" onClick={backToHome}>Back to Home</Button>
            </Box>
        </div>
        

    )
}

export default Details;