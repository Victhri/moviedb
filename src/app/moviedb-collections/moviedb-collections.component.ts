import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbCollectionsApiService } from './moviedb-collections-api.service';
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
      name: 'Upcoming movies',
      contents$: this.api.requestMovies('movie', 'upcoming'),
    },
    {
      name: 'Popular movies',
      contents$: this.api.requestMovies('movie', 'popular'),
    },
  ];
  constructor(private readonly api: MoviedbCollectionsApiService) {}
}
