import { Component } from '@angular/core';
import { db } from "../assets/movie-db";
import {Movie} from "./movie.model"

//import { Movie } from '../movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie';
  
  //movie: Movie = new Movie();

  errorMessage:string = "";
  //movies:Movie[] =[];
  filteredMovies:Movie[] = [];
  selectedLanguages:any={};
  languages:any[] = db.languages;
   selectedGenres:any={};
  genres:any[] = db.genres;

  
  movies: Movie[] =[];
  //show: boolean;

  constructor(){
    this.languages.forEach(language => this.selectedLanguages[language.name] = false);
    this.genres.forEach(genre => this.selectedGenres[genre.name] = false);
  
    this.filteredMovies=this.movies;
  }

  

  ngOnInit(): void {
      this.movies = db.movies;
      this.filteredMovies = this.movies;
  }


  onCheckboxSelect() {
    // Filter the movies based on selectedLanguages and selectedGenres
    this.filteredMovies = this.movies.filter(movie => {
      if (this.selectedLanguages[movie.language] && this.selectedGenres[movie.genre]) {
        return true;
      }
      if (this.selectedLanguages[movie.language] || this.selectedGenres[movie.genre]) {
        return true;
      }
      
      
      return false;
    });   

}


    clearFilters()
    {

      this.languages.forEach(language => this.selectedLanguages[language.name] = false);
      this.genres.forEach(genre => this.selectedGenres[genre.name] = false);
      this.filteredMovies=this.movies;
    }

    onCheckboxDeselect()
    {
     
     
      if (!Object.values(this.selectedLanguages).includes(true) && !Object.values(this.selectedGenres).includes(true)) {
        this.filteredMovies = this.movies;
      }

      
    }
}
