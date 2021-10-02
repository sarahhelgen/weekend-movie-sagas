# Weekend Movie Sagas

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

TO DO LIST:

- [x] npm installs
- [x] set up db
- [ ] many to many join

- [] home/list page:
    - [x] -need to write route (Movie List component, /home)
    - [x] when movie poster is clicked, user needs to be brought to /details view for that movie
      - useDispatch, type: 'FETCH_MOVIE_DETAIL, payload: movie [x]
        - useHistory to push to /details [x]
        - add 'FETCH_MOVIE_DETAIL' and fetchMovieDetails to rootsaga [x]
        - add 'FETCH_GENRE_DTAIL' and fetchGenreDetails to root saga [x]
        - for saga, fetchMovieDetails and fetchGenreDetails generator function, axios GET with movie id. [x]  

- [x] details page (needs /details route and component)
- in MovieList, write a function to view movie details:
        
        - check movie router and update querytext
        - put will be 'SET_MOVIE_DETAILS' which should call a reducer. [x]
        - reducer: selectedMovie [x]
    - [] show all details including all genres for the selected movie - you'll need to store this data in redux
    - useSelector to display the info on the dom.
        - hint: you can make a get request for a specific movie. req.params and :id
    -  [] this page also needs a button that onclick brings you back to the home/list page


- [x] add movies page (needs /addmovies route and component)
    -useDispatch
    - [x] need to make a form with:
        - [x] input field for movie title
        - [x] input field for movie poster url
        - [x] textarea for movie description
        - [x] dropdown menu (for the genres)
        - [x] save button - sends the data to the db and brings the user back to home/list page
    - [x] cancel button, which will also bring the user back to the home/list page
    - [] need to write GET route for genre router
        - [] will need M2M join query language for this

    - [] update readme
    - [] add code comments
    - [] style a bit with material UI
