// show movie genre code
const showMovieGenres = async () => {
    const movieGenreList = document.getElementById('genresList');
    const data = await getGenres();
    data.genres.forEach(movieGenre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `Genre: ${movieGenre.name}, id ${movieGenre.id}`);
        li.appendChild(liContent);
        movieGenreList.append(li);
    });

};
showMovieGenres();

// show favorite movie code
const showFavoriteMovie = async () => {
    const data = await getFavoriteMovie("tt0457939");
    const movie = data.movie_results[0];
    const topMovieParagraph = document.getElementById("topMovie");
    topMovieParagraph.appendChild(document.createTextNode(movie.title));
}
showFavoriteMovie();

// show top 10 code 

const showTopTen = async () => {
    const top10List = document.getElementById("topRated");
    const data = await getTopTen();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}`);
        li.appendChild(liContent);
        top10List.append(li);
    });
};

showTopTen();

// show top 10 action movies
const showActionTopTen = async genreId => {
    const topRatedActionList = document.getElementById("topAction");
    topRatedActionList.innerHTML = " ";
    const data = await getTopTenAction(genreId);
    const topTenAction = data.results.splice(0, 10);
    topTenAction.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${movie.title}, rating: ${movie.vote_average}, vote count:${movie.vote_count}`
        );
        li.appendChild(liContent);
        topRatedActionList.append(li);
    })
}
showActionTopTen();

// show movies 1975

const showMoviesYear = async () => {
    const moviesYearList = document.getElementById('Movies1975');
    moviesYearList.innerHTML = "";
    const data = await getMoviesYear();
    const movieYear = data.results.splice(0, 10);
    movieYear.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(`${movie.title}`);
        li.appendChild(liContent);
        moviesYearList.append(li);
    })
}
showMoviesYear();