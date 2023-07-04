"use strict"

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

start();
writeYourGenres();
detectPersonalLevel();
rememberMyFilms();
showMyDB()

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')

    while(numberOfFilms == '' || numberOfFilms == null 
          || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено мало фильмов");
    }
    else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 30){
        alert("Вы киноман");
    }
}

function rememberMyFilms(){
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
}

function showMyDB(){
    if(personalMovieDB.private == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const currentGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = currentGenre;
    }
}
