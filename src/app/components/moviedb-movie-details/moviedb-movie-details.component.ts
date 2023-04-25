import { Component } from '@angular/core';
import { MediaType } from 'src/app/pages/moviedb-collections/moviedb-collection';

@Component({
  selector: 'app-moviedb-movie-details',
  templateUrl: './moviedb-movie-details.component.html',
  styleUrls: ['./moviedb-movie-details.component.scss'],
})
export class MoviedbMovieDetailsComponent {
  movieMediaType: MediaType.Movie = MediaType.Movie;
}
