import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable, EMPTY, tap, map } from 'rxjs';
import { MoviedbSeriesDetailsApiService } from './moviedb-series-details-api.service';
import {
  Details,
  ActorCollection,
  CrewCollection,
  CreditsResponse,
  CrewCollectionDTO,
  ActorCollectionDTO,
  CreditsData,
} from './moviedb-series-details';

@Component({
  selector: 'app-moviedb-details',
  templateUrl: './moviedb-details.component.html',
  styleUrls: ['./moviedb-details.component.scss'],
})
export class MoviedbDetailsComponent {
  details$: Observable<Details> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.requestDetails(paramMap.get('type'), paramMap.get('name')))
  );

  data$: Observable<CreditsData> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.getData(paramMap.get('type'), paramMap.get('name'))),
    map((response) => ({
      cast: response.cast.map((item) => ({ name: item.name, path: item.profile_path })),
      crew: response.crew.map((item) => ({ name: item.name })),
    }))
  );

  actors$: Observable<ActorCollection[]> = this.data$.pipe(map((data) => data.cast));

  crew$: Observable<CrewCollection[]> = this.data$.pipe(map((data) => data.crew));

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
