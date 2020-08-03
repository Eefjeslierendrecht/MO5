console.log("client script")

const API_KEY = "043307eba9706b966152f3452cccfafe";

const getData = async function () {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    try {
        const res = await fetch(apiURL, { method: "GET" });
        const data = await res.json();
        console.log("The data in getData functionL:", data);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};



