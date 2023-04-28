import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable, EMPTY, map } from 'rxjs';
import { MoviedbSeriesDetailsApiService } from './moviedb-series-details-api.service';
import { Details, CreditsResponse, CreditsData } from './moviedb-series-details';
import { MediaType } from '../moviedb-collections/moviedb-collection';

@Component({
  selector: 'app-moviedb-details',
  templateUrl: './moviedb-details.component.html',
  styleUrls: ['./moviedb-details.component.scss'],
})
export class MoviedbDetailsComponent {

@Input() mediaType: MediaType.Movie | MediaType.Serials = MediaType.Movie;
  data$: Observable<CreditsData> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.getData(this.mediaType, paramMap.get('name'))),
    map((response) => ({
      cast: response.cast.map((item) => ({ id: item.id, name: item.name, path: item.profile_path })),
      crew: response.crew.map((item) => ({ name: item.name })),
    }))
  );

  details$: Observable<Details> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.requestDetails(this.mediaType, paramMap.get('name')))
  );

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly detailsApi: MoviedbSeriesDetailsApiService) {}

  private requestDetails(type: string | null, name: string | null): Observable<Details> {
    if (!name) {
      return EMPTY;
    }
    return this.detailsApi.requestDetails(type, name);
  }

  private getData(type: string | null, name: string | null): Observable<CreditsResponse> {
    if (!name) {
      return EMPTY;
    }
    return this.detailsApi.getData(type, name);
  }
}
