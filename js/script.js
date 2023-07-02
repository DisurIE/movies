const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstMovieSeen = prompt('Один из последних просмотренных фильмов', ''),
      firstRateMovie = prompt('На сколько оцените его?', ''),
      secondMovieSeen = prompt('Один из последних просмотренных фильмов', ''),
      secondRateMovie = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[firstMovieSeen] = firstRateMovie;
    personalMovieDB.movies[secondMovieSeen] = secondRateMovie,

console.log(personalMovieDB)