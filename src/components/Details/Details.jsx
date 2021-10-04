import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

    const movieDetails = useSelector(store => store.movieDetailReducer);
    const genreDetails = useSelector(store => store.genreDetailReducer);
    const history = useHistory();

    const backToHome = () => {
        history.push('/');
    }
    return (

        // {JSON.stringify(movieDetails)}
        // {JSON.stringify(genreDetails)}
        <div>
            <h3>Movie Details</h3>
            {movieDetails.map((movie) =>
                <div>
                    <p>  Movie Name: {movie.title} </p>
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
            <button onClick={backToHome}>Back to Home</button>
        </div>

    )
}

export default Details;