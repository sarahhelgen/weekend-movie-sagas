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
    - [] when movie poster is clicked, user needs to be brought to /details view for that movie
- [x] details page (needs /details route and component)
    - [] show all details including all genres for the selected movie - you'll need to store this data in redux
        - hint: you can make a get request for a specific movie. req.params and :id
    -  [] this page also needs a button that onclick brings you back to the home/list page
- [x] add movies page (needs /addmovies route and component)
    -useDispatch
    - [] need to make a form with:
        - [] input field for movie title
        - [] input field for movie poster url
        - [] textarea for movie description
        - [] dropdown menu (for the genres)
        - [] save button - sends the data to the db and brings the user back to home/list page
    - [] cancel button, which will also bring the user back to the home/list page

    - [] update readme
    - [] add code comments
    - [] style a bit with material UI
