import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable, EMPTY } from 'rxjs';
import { MoviedbSeriesDetailsApiService } from './moviedb-series-details-api.service';
import { Details, ActorCollection } from './moviedb-series-details';

@Component({
  selector: 'app-moviedb-details',
  templateUrl: './moviedb-details.component.html',
  styleUrls: ['./moviedb-details.component.scss'],
})
export class MoviedbDetailsComponent {
  details$: Observable<Details> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.requestDetails(paramMap.get('type'), paramMap.get('name')))
  );
  actors$: Observable<ActorCollection[]> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.requestActors(paramMap.get('type'), paramMap.get('name')))
  );
  crew$: Observable<any> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.requestCrew(paramMap.get('type'), paramMap.get('name')))
  );

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly detailsApi: MoviedbSeriesDetailsApiService) {}

  private requestCrew(type: string | null, name: string | null): Observable<any> {
    if (!name) {
      return EMPTY;
    }
    return this.detailsApi.requestCrew(type, name);
  }
  private requestActors(type: string | null, name: string | null): Observable<any> {
    if (!name) {
      return EMPTY;
    }
    return this.detailsApi.requestActors(type, name);
  }
  private requestDetails(type: string | null, name: string | null): Observable<Details> {
    if (!name) {
      return EMPTY;
    }
    return this.detailsApi.requestDetails(type, name);
  }
}
