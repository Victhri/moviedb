import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbCollection } from '../moviedb-collections/moviedb-collection';
import { MoviedbCollectionsApiService } from './moviedb-collections-api.service';

interface Collection {
  name: string;
  contents$: Observable<MoviedbCollection[]>;
}

@Component({
  selector: 'app-moviedb-trending',
  templateUrl: './moviedb-trending.component.html',
  styleUrls: ['./moviedb-trending.component.scss'],
})
export class MoviedbTrendingComponent {
  public data: Collection[] = [
    {
      name: 'Trending movies',
      contents$: this.api.requestMovies('movie', 'day'),
    },
  ];
  constructor(private readonly api: MoviedbCollectionsApiService) {}
}
