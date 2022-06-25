const tmdbKey = 'c3c5caf5fcc527355e8d7aaf5e4759dd';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
//const variable = `?key=value` in this case key = api_key and value = tmdbkey
  const requestParams = `?api_key = ${tmdbKey}}`
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {

  } catch (err) {
    console.log(err)
  };
};

/*
step 6 is to turn getGenres into an asynchronous function. So all I should have to do is before the parantheses is add the async keyword.
const myFunc = async () => {
  // Function body here
};
 
myFunc();

https://www.notion.so/kassandraeam/Async-Await-4663edd63b04466e933ee5d5e6c78b10#284d6efa5eff48bcaa1126c65312cbec

*/
// try/catch statement. Leave try block empty. IN catch block log caught errors to console.
console.log(requestParams);

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
