const API_KEY = '043307eba9706b966152f3452cccfafe';
const base_endpoint = `https://api.themoviedb.org/3`;

// genre api 
const getGenres = async function () {
    const apiUrl = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

// favoriete film api
const getFavoriteMovie = async movieId => {
    const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// top 10 rated
const getTopTen = async () => {
    const movieTopTenEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}`
    try {
        const res = await fetch(movieTopTenEndpoint, { method: "GET" });
        return await res.json();

    } catch (error) {
        console.log(error);
    }
}

// top 10 rated in Action
const getTopTenAction = async () => {
    const topRatedActionEndpoint = `${base_endpoint}/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const res = await fetch(topRatedActionEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// films uit het jaar 1975
const getMoviesYear = async () => {
    const moviesYearEndPoint = `${base_endpoint}/discover/movie?api_key=${API_KEY}`;
    try {
        const res = await fetch(moviesYearEndPoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
