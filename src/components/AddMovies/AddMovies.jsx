import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import React from 'react';


function AddMovies(){
    
    //using local state to capture user inputs for data to be sent to server
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre ] = useState('');
    
    // on click of submit button, function will capture user inputs, wrap them into a new movie object and post the object to the
    //database via sagas, then will return the user to the movie poster page
    const addNewMovie = (event) => {
        console.log('in addNewMovie');
        event.preventDefault();
        const newMovie = {
            title: title,
            poster: poster,
            description: description,
            genre: genre,
        }
        console.log('The new movie is', newMovie );
        dispatch({type:'POST_MOVIE_TO_SERVER', payload: newMovie})
        history.push('/');
    }
    //will send the user back to the home page
    const handleCancel = () => {
        history.push('/');
    }

    return(

        
        <form onSubmit={addNewMovie}>
            <input type="text" placeholder="movie title" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <input type="text" placeholder="movie poster url" value={poster} onChange={(event)=> setPoster(event.target.value)}/>
            <textarea value={description} onChange={(event)=>setDescription(event.target.value)}>
                Movie Description Here!
            </textarea>
            <select onChange={(event) =>setGenre(event.target.value)}>
                <option value={1}>Adventure</option>
                <option value={2}>Animated</option>
                <option value={3}>Biographical</option>
                <option value={4}>Comedy</option>
                <option value={5}>Disaster</option>
                <option value={6}>Drama</option>
                <option value={7}>Epic</option>
                <option value={8}>Fantasy</option>
                <option value={9}>Musical</option>
                <option value={10}>Romantic</option>
                <option value={11}>Science Fiction</option>
                <option value={12}>Space-Opera</option>
                <option value={13}>Superhero</option>
            </select>
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>

    
    )
}

export default AddMovies;