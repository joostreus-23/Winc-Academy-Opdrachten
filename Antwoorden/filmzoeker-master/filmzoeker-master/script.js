const generateMovieListItem = movie => {
  // Takes a movie object and turns it into
  //
  // <li class="list-item">
  //   <a href="imdb.com/bla">
  //     <img src="imdb.com/bla.jpg"/>
  //   </a>
  // </li>

  // Create elements.
  let li = document.createElement("li");
  let a = document.createElement("a");
  let img = document.createElement("img");

  // Change their properties.
  li.classList.add("list-item");
  a.href = `https://www.imdb.com/title/${movie.imdbID}/`;
  img.src = movie.Poster;

  // Put elements together.
  li.appendChild(a);
  a.appendChild(img);

  return li;
};

const addMoviesToDom = moviesToShow => {
  // selecteer de UL
  const list = document.getElementById("movie-list");
  // Om te voorkomen dat de gefilterde films aan de huidige films worden geplakt: leeg de ul;
  list.innerHTML = "";
  const listItems = moviesToShow.map(generateMovieListItem);

  listItems.forEach(listItem => {
    list.appendChild(listItem);
  });
  // Het onderstaande werkt ook, maar met een spread operator. Dat komt nog.
  // list.append(...listItems);
};

const minimumYear = 2014;
const getLatestMovies = movies => {
  const filteredMovies = movies.filter(movie => {
    return movie.Year >= minimumYear;
  });
  return filteredMovies;
};

const getMoviesFilteredByTitle = (movies, titlePart) => {
  const filteredMovies = movies.filter(movie => {
    // lowercase movie title from source
    const movieTitle = movie.Title.toLowerCase();
    return movieTitle.includes(titlePart);
  });
  return filteredMovies;
};

const filmFilterChangeHandler = event => {
  // can be "latest", "batman", "x-men" etc..
  const movieType = event.target.value;
  let filteredMovies;
  // movies is a global variable
  if (movieType === "latest") {
    filteredMovies = getLatestMovies(movies);
  } else {
    filteredMovies = getMoviesFilteredByTitle(movies, movieType);
  }
  addMoviesToDom(filteredMovies);
};

const addEventListeners = () => {
  const filmFilters = document.getElementsByName("film-filter");
  filmFilters.forEach(filmFilter => {
    filmFilter.addEventListener("change", filmFilterChangeHandler);
  });
};

addMoviesToDom(movies);
addEventListeners();
