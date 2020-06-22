const API_KEY = "1f3239a823ea6c73178c7af0f249b271";




const getMovieGenres = async (url) => {
    try {
        const apiUrl = `${url}${API_KEY}`;
        const res = await fetch(apiUrl, { method: "GET" });
        const jsonData = await res.json();
        console.log("Dit staat er in de movies genres json data ", jsonData);
        jsonData.genres.forEach(genre => {
            const newLi = document.createElement("li");
            const newA = document.createElement("a")
            newA.innerHTML = `Genre naam: ${genre.name}, id: ${genre.id}`;
            movieUL.appendChild(newLi);
            newLi.appendChild(newA);
        })
    } catch (error) {
        console.log(error);
    }
};


const getMyFavMovie = async (url) => {
    try {
        const apiUrl = `${url}${API_KEY}&external_source=imdb_id`;
        const res = await fetch(apiUrl, { method: "GET" });
        const jsonData = await res.json();
        console.log("Dit staat er in mijn favorite json data ", jsonData);
        jsonData.movie_results.forEach(item => {
            const newLi = document.createElement("li");
            const newA = document.createElement("a")
            newA.innerHTML = `${item.title}`;
            movieULid.appendChild(newLi);
            newLi.appendChild(newA);
        })
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedData = async (url) => {
    try {
        const apiUrl = `${url}`;
        const res = await fetch(apiUrl, { method: "GET" });
        const jsonData = await res.json();
        console.log("Dit staat er in de top rated json data ", jsonData);
        jsonData.results.forEach(item => {
            const newLi = document.createElement("li");
            const newA = document.createElement("a")
            newA.innerHTML = `${item.title}`;
            movieULtop2019.appendChild(newLi);
            newLi.appendChild(newA);
        })
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedActionData = async (url) => {
    try {
        const apiUrl = `${url}`;
        const res = await fetch(apiUrl, { method: "GET" });
        const jsonData = await res.json();
        console.log("Dit staat er in de top rated action json data ", jsonData);
        jsonData.results.forEach(item => {
            const newLi = document.createElement("li");
            const newA = document.createElement("a")
            newA.innerHTML = `${item.title}`;
            movieULtopAction.appendChild(newLi);
            newLi.appendChild(newA);
        })
    } catch (error) {
        console.log(error);
    }
};

const getTopRated1975Data = async (url) => {
    try {
        const apiUrl = `${url}`;
        const res = await fetch(apiUrl, { method: "GET" });
        const jsonData = await res.json();
        console.log("Dit staat er in de top rated 1975 json data ", jsonData);
        jsonData.results.forEach(item => {
            const newLi = document.createElement("li");
            const newA = document.createElement("a")
            newA.innerHTML = `${item.title}`;
            movieULtop1975.appendChild(newLi);
            newLi.appendChild(newA);
        })
    } catch (error) {
        console.log(error);
    }
};