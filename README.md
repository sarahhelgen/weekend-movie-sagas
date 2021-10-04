# Weekend Movie Sagas

## Description

Duration: 2 day sprint

Created a movie management application using React Redux and Redux Sagas. A user can click on a movie image poster and be taken to a details page where they can view details on the movie as well as genre details. By clicking on the add a movie button, a user can input their own movies into the database to be listed on the movie poster page.

Deployed version of the app can be found here: (will add once deployed to Heroku)

I created the following to do list to complete this project:

- npm installs and db setup

- Home Page/Poster Page:
    - write route (Movie List component, /home)
    - when movie poster is clicked, user needs to be brought to /details view for that movie
    - useDispatch, type: 'FETCH_MOVIE_DETAIL, payload: movie 
    - useHistory to push to /details 
    - add 'FETCH_MOVIE_DETAIL' and fetchMovieDetails to rootsaga 
    - add 'FETCH_GENRE_DTAIL' and fetchGenreDetails to root saga 
    - for saga, fetchMovieDetails and fetchGenreDetails generator function, axios GET with movie id.  
    - button to navigate to Add Movie page

- Details Page:
    - needs /details route and component
    - in MovieList, write a function to view movie details:
        - put will be 'SET_MOVIE_DETAILS' which should call a reducer.
        - reducer: selectedMovie and selectedGenre
    - show all details including all genres for the selected movie - you'll need to store this data in redux
    - useSelector to display the info on the dom.
    - many to many join on server side
    - needs a button that onclick brings you back to the home/list page


- Add Movies Page
    - needs /addmovies route and component
    - need to make a form with:
        - input field for movie title
        - input field for movie poster url
        - textarea for movie description
        - dropdown menu (for the genres)
        - save button - sends the data to the db and brings the user back to home/list page
        - cancel button, which will also bring the user back to the home/list page
    - use local state to capture inputs of form
    - on click of submit button, send the new movie data to db via POST. 
    - need to use saga for this: type: 'SEND_NEW_MOVIE_DATA'

- Other to dos:
    - update readme
    - add code comments
    - style a bit with material UI (still need to do this)

    ## Installation

    - Create a database called 'saga_movies_weekend'
    - The queries in the 'database.sql' file are all set up for you. This project was built in Postgres, so you will need to have that installed and I'd recommed using Postico to run queries, as that is what I used to test my data.
    - Open your code editor and run an `npm install` in your terminal
    - Run `npm run client` and `npm run server`
    - Open on `localhost:3000`, server is on `localhost:5000`

    ## Screen Shots
    Screen shots will go here once I've updated styling.

    ## Built with
    React, Redux, Redux Sagas, React Router Dom, Postgresql, Node.js, Axios, Express, PG

    ## Acknowledgement:
    Thanks to my instructors Chris, Liz, Dane, and my classmates at Prime for helping me learn the skills to build this app!

    ## Support
    If you have feedback or issues with the app, please reach out to me at sarah.helgen@gmail.com
