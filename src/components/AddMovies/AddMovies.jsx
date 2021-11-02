import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';





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

        <FormControl fullWidth>
        <form onSubmit={addNewMovie}>
            <TextField id="outlined-basic" label="Movie Title" variant="outlined" value={title} onChange={(event) => setTitle(event.target.value)}  />
            {/* <input type="text" placeholder="movie title" value={title} onChange={(event) => setTitle(event.target.value)}/> */}
            {/* <input type="text" placeholder="movie poster url" value={poster} onChange={(event)=> setPoster(event.target.value)}/> */}
            <TextField id="outlined-basic" label="Movie Poster URL" variant="outlined" value={poster} onChange={(event)=> setPoster(event.target.value)} />
            {/* <textarea value={description} onChange={(event)=>setDescription(event.target.value)}> */}
            <TextField id="outlined-basic" multiLine={true} rows={4} label="Movie Description" variant="outlined" value={description} onChange={(event)=> setDescription(event.target.value)} />
            <Select autoWidth value={genre} onChange={(event) =>setGenre(event.target.value)}>
                <MenuItem value={1}>Adventure</MenuItem>
                <MenuItem value={2}>Animated</MenuItem>
                <MenuItem value={3}>Biographical</MenuItem>
                <MenuItem value={4}>Comedy</MenuItem>
                <MenuItem value={5}>Disaster</MenuItem>
                <MenuItem value={6}>Drama</MenuItem>
                <MenuItem value={7}>Epic</MenuItem>
                <MenuItem value={8}>Fantasy</MenuItem>
                <MenuItem value={9}>Musical</MenuItem>
                <MenuItem value={10}>Romantic</MenuItem>
                <MenuItem value={11}>Science Fiction</MenuItem>
                <MenuItem value={12}>Space-Opera</MenuItem>
                <MenuItem value={13}>Superhero</MenuItem>
            </Select>
            <Button variant="contained" type="submit">Save</Button>
            <Button variant="contained" onClick={handleCancel}>Cancel</Button>
        </form>
        </FormControl>

    
    )
}

export default AddMovies;