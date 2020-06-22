
const movieUL = document.getElementById("genres-movies")
const movieULid = document.getElementById("myfav-movie")
const movieULtop2019 = document.getElementById("toprated-movies")
const movieULtopAction = document.getElementById("topratedaction-movies")
const movieULtop1975 = document.getElementById("toprated1975-movies")
// const getGenresDataJson = async () => {

//     await getMovieGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=");
// };

// getGenresDataJson()

getMovieGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=");

getMyFavMovie("https://api.themoviedb.org/3/find/tt0111161?api_key=");

getTopRatedData("https://api.themoviedb.org/3/discover/movie?api_key=1f3239a823ea6c73178c7af0f249b271&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019")

getTopRatedActionData("https://api.themoviedb.org/3/discover/movie?api_key=1f3239a823ea6c73178c7af0f249b271&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28&page=1");

getTopRated1975Data("https://api.themoviedb.org/3/discover/movie?api_key=1f3239a823ea6c73178c7af0f249b271&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975")
