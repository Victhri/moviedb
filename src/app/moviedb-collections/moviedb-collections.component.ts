import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviedbPopularApiService } from './moviedb-popular-api.service';
import { MoviedTrendingApiService } from './moviedb-trending-api.service';
import { MoviedbUpcomingApiService } from './moviedb-upcoming-api.service';
import { MovieCollection, SeriesCollection } from './moviedb-collection';

// interface Collection {
//   name: string;
//   contents$: Observable<MovieCollection[]> | Observable<SeriesCollection[]>;
// }

@Component({
  selector: 'app-moviedb-collections',
  templateUrl: './moviedb-collections.component.html',
  styleUrls: ['./moviedb-collections.component.scss'],
})
export class MoviedbCollectionsComponent {
  public data = [
    {
      name: 'Trends',
      contents$: this.apiTrends.getTrends('day'),
    },

    {
      name: 'Popular',
      contents$: this.apiPopular.getPopular('popular'),
    },
    {
      name: 'Upcoming movies',
      contents$: this.apiUpcoming.getupcoming('upcoming'),
    },
  ];
  constructor(
    private readonly apiTrends: MoviedTrendingApiService,
    private readonly apiPopular: MoviedbPopularApiService,
    private readonly apiUpcoming: MoviedbUpcomingApiService
  ) {}
}
