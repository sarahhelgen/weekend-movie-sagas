import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';


function AddMovies(){
    
    const dispatch = useDispatch();
    const history = useHistory;
    const [newMovie, setNewMovie] = useState({  name: '', url: '', description: '',});
    const [newGenre, setNewGenre] = useState({ type : ''});
    
    const addNewMovie = (event) => {
        console.log('in addNewMovie');
        event.preventDefault();
        dispatch({type: 'POST_MOVIE_TO_SERVER', payload: newMovie });
        dispatch({type: 'POST_GENRE_TO_SERVER', payload: newGenre });
        setNewMovie({  name: '',url: '', description: '',});
        setNewGenre({ type: ''});
    }

    const handleMovieChange = (event) => {
        console.log('entering movie name');
        setNewMovie({...setNewMovie, name: event.target.value})
    }

    const handlePosterChange = (event) => {
        console.log('entering poster url');
        setNewMovie({...setNewMovie, url: event.target.value })
    }
    
    const handleDescriptionChange = (event) => {
        console.log('entering movie description');
        setNewMovie({...setNewMovie, description: event.target.value});
    }

    const handleGenreChange = (event) => {
        console.log('choosing movie genre');
        setNewGenre({...setNewGenre, type: event.target.value });
    }

    return(

        <>
        <form onSubmit={addNewMovie}>
            <input type="text" placeholder="movie title" value={newMovie.title} onChange={handleMovieChange}/>
            <input type="text" placeholder="movie poster url" value={newMovie.poster} onChange={handlePosterChange}/>
            <textarea value={newMovie.description} onChange={handleDescriptionChange}>
                Movie Description Here!
            </textarea>
            <select onChange={handleGenreChange}>
                <option>Adventure</option>
                <option>Animated</option>
                <option>Biographical</option>
                <option>Comedy</option>
                <option>Disaster</option>
                <option>Drama</option>
                <option>Epic</option>
                <option>Fantasy</option>
                <option>Musical</option>
                <option>Romantic</option>
                <option>Science Fiction</option>
                <option>Space-Opera</option>
                <option>Superhero</option>
            </select>
            <button type="submit">Save</button>
        </form>
        <button>Cancel</button>
        </>
    )
}

export default AddMovies;