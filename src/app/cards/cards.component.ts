//import { Component, Input } from '@angular/core';
//import { db } from "../../assets/movie-db";
//import { Movie } from '../movie.model';
//import { Movie } from './movie.model';




import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

//import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent {

  @Input() movie!: Movie;
}
 
  


