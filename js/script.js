"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
    if(personalMovieDB.count < 10){
        alert("Просмотрено мало фильмов");
    }
    else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель");
    }
    else{
        alert("Вы киноман");
    }
    for(let i = 0; i < 2; i++){
        const firstMovieSeen = prompt('Один из последних просмотренных фильмов', ''),
              firstRateMovie = prompt('На сколько оцените его?', '');
              if(firstMovieSeen == '' || firstRateMovie == '' 
                || firstRateMovie.length > 50 || firstMovieSeen.length > 50){
                    alert("Ошибка при вводе")
                    i--;
              }
              else{
                personalMovieDB.movies[firstMovieSeen] = firstRateMovie;
              }
    }
      

console.log(personalMovieDB)