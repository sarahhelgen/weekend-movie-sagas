# Weekend Movie Sagas

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Duration: 2 day sprint

Created a movie management application using React Redux and Redux Sagas. A user can click on a movie image poster and be taken to a details page where they can view details on the movie as well as genre details. By clicking on the add a movie button, a user can input their own movies into the database to be listed on the movie poster page.

Deployed version of the app can be found here: (will add once deployed to Heroku)

TO DO LIST:

- [x] npm installs
- [x] set up db
- [ x] many to many join

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
        
        - check movie router and update querytext [x]
        - put will be 'SET_MOVIE_DETAILS' which should call a reducer. [x]
        - reducer: selectedMovie and selectedGenre [x]
    - [x] show all details including all genres for the selected movie - you'll need to store this data in redux
    - useSelector to display the info on the dom.
        - hint: you can make a get request for a specific movie. req.params and :id [x]
    -  [x] this page also needs a button that onclick brings you back to the home/list page


- [x] add movies page (needs /addmovies route and component)
    -useDispatch
    - [x] need to make a form with:
        - [x] input field for movie title
        - [x] input field for movie poster url
        - [x] textarea for movie description
        - [x] dropdown menu (for the genres)
        - [x] save button - sends the data to the db and brings the user back to home/list page
    - [x] cancel button, which will also bring the user back to the home/list page

    - [x] use localstate to capture inputs of form
    - [x] onclick of submit button, send the new movie data to db via POST. 
    - need to use saga for this:
        type: 'SEND_NEW_MOVIE_DATA'



    - [x] need to write GET route for genre router
        - [x] will need M2M join query language for this

    - [] update readme
    - [] add code comments
    - [] style a bit with material UI

    ## Installation

    1. Create a database called 'saga_movies_weekend'
    2. The queries in the 'database.sql' file are all set up for you. This project was built in Postgres, so you will need to have that installed and I'd recommed using Postico to run queries, as that is what I used to test my data.
    3. Open your code editor and run an `npm install` in your terminal
    4. Run `npm run client` and `npm run server`
    5. Open on `localhost:3000`, server is on `localhost:5000`

    ## Screen Shots
    Screen shots will go here once I've updated styling.

    ## Built with
    React, Redux, Redux Sagas, Postgresql, Node.js, Axios, Express, PG

    ## Acknowledgement:
    Thanks to my instructors Chris, Liz, Dane, and Kris and everyone at Prime for helping me learn the skills to build this app!

    ## Support
    If you have feedback or issues with the app, please reach out to me at sarah.helgen@gmail.com
