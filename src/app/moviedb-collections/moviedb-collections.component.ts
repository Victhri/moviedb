import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbCollectionsApiService } from './moviedb-collections-api.service';
import { MoviedTrendingApiService } from './moviedb-trending-api.service';
import { MoviedbCollection } from './moviedb-collection';

interface Collection {
  name: string;
  contents$: Observable<MoviedbCollection[]>;
}

@Component({
  selector: 'app-moviedb-collections',
  templateUrl: './moviedb-collections.component.html',
  styleUrls: ['./moviedb-collections.component.scss'],
})
export class MoviedbCollectionsComponent {
  public data: Collection[] = [
    {
      name: 'Trending movies',
      contents$: this.api2.requestMovies('movie', 'day'),
    },
    {
      name: 'Upcoming movies',
      contents$: this.api.requestMovies('movie', 'upcoming'),
    },
    {
      name: 'Popular movies',
      contents$: this.api.requestMovies('movie', 'popular'),
    },
  ];
  constructor(private readonly api: MoviedbCollectionsApiService, private readonly api2: MoviedTrendingApiService) {}
}
