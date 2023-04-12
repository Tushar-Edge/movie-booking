export class Language {
    name: string;
    checked: boolean;
  
    constructor(name: string, checked: boolean) {
      this.name = name;
      this.checked = checked;
    }
  }
  
  export class Genre {
    name: string;
    checked: boolean;
  
    constructor(name: string, checked: boolean) {
      this.name = name;
      this.checked = checked;
    }
  }
  
  export class Movie {
    id: number;
    title: string;
    image: string;
    ratings: number;
    genre: string;
    length: number;
    releasedDate: string;
    language: string;
    showTime: string;
    price: number;
    available: boolean;
    
  
    constructor(
      id: number,
      title: string,
      image: string,
      ratings: number,
      genre: string,
      length: number,
      releasedDate: string,
      language: string,
      showTime: string,
      price: number,
      available: boolean,
      
    ) {
      this.id = id;
      this.title = title;
      this.image = image;
      this.ratings = ratings;
      this.genre = genre;
      this.length = length;
      this.releasedDate = releasedDate;
      this.language = language;
      this.showTime = showTime;
      this.price = price;
      this.available = available;
      
    }
  }
  
  export class MovieDB {
    languages: Language[];
    genres: Genre[];
    movies: Movie[];
  
    constructor(languages: Language[], genres: Genre[], movies: Movie[]) {
      this.languages = languages;
      this.genres = genres;
      this.movies = movies;
    }
  }
  