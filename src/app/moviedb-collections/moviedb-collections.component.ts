import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbCollectionsApiService } from './moviedb-collections-api.service';
import { MoviedTrendingApiService } from './moviedb-trending-api.service';
import { MovieCollection } from './moviedb-collection';

interface Collection {
  name: string;
  contents$: Observable<MovieCollection[]>;
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
      contents$: this.apiTrends.requestMovies('movie', 'day'),
    },
    {
      name: 'Upcoming movies',
      contents$: this.apiCategories.requestMovies('movie', 'upcoming'),
    },
    {
      name: 'Popular movies',
      contents$: this.apiCategories.requestMovies('movie', 'popular'),
    },
  ];
  constructor(private readonly apiCategories: MoviedbCollectionsApiService, private readonly apiTrends: MoviedTrendingApiService) {}
}
