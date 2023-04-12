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


  errorMessage:string = "";
  //movies:Movie[] =[];
  filteredMovies:Movie[] = [];
  selectedLanguage: string = '';
  languages:any[] = db.languages;
   selectedGenre: string = '';
  genres:any[] = db.genres;

  
  movies: Movie[] =[];
  //show: boolean;

  constructor(){
   
  
    
  }

  ngOnInit(): void {
      this.movies = db.movies;
      this.filteredMovies = this.movies;
  }
}



