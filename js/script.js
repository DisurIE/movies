"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    
        while(this.count == '' || this.count == null 
              || isNaN(this.count)) {
                this.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }
    },
    
    rememberMyFilms: function(){
        for(let i = 0; i < 2; i++){
            const firstMovieSeen = prompt('Один из последних просмотренных фильмов', ''),
                  firstRateMovie = prompt('На сколько оцените его?', '');
                  if(firstMovieSeen == '' || firstRateMovie == '' 
                    || firstRateMovie.length > 50 || firstMovieSeen.length > 50){
                        alert("Ошибка при вводе")
                        i--;
                  }
                  else{
                    this.movies[firstMovieSeen] = firstRateMovie;
                  }
        }
    },
    
    showMyDB: function(){
        if(this.private == false){
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            const currentGenre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if(currentGenre === null || currentGenre === ''){
                i--;
            }
            else{
            this.genres[i] = currentGenre;
            }
        }

        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        });

    },

    detectPersonalLevel: function(){
        if(this.count < 10){
            alert("Просмотрено мало фильмов");
        }
        else if(this.count > 10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
        }
        else if (this.count >= 30){
            alert("Вы киноман");
        }
    },

    toggleVisibleMyDB: function(){
        if(this.private){
            this.private = false;
            return;
        }
        this.private = true;
    },
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB()
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB()
