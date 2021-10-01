import {useHistory} from 'react-router-dom';
function AddMovies(){
    
    const history = useHistory;
    
    //will need to use local state to capture inputs
    //check old projects from dev on how selects work with state
    //all axios requests need to now to into index.js via sagas
    


    return(

        <>
        <form>
            <input type="text" placeholder="movie title"/>
            <input type="text" placeholder="movie poster url"/>
            <textarea>
                Movie Description Here!
            </textarea>
            <select>
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