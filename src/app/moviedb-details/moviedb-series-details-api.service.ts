import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  SeriesCollectionDescriptionDTO,
  MovieCollectionDescriptionDTO,
  CreditsResponse,
  Details,
  ActorCollection,
} from './moviedb-series-details';
import { detailsMapper } from '../helpers/format-response';
@Injectable({
  providedIn: 'root',
})
export class MoviedbSeriesDetailsApiService {
  constructor(private readonly http: HttpClient) {}

  requestActors(type: string | null, name: string | number): Observable<ActorCollection[]> {
    return this.http
      .get<CreditsResponse>(`/${type}/${name}/credits`)
      .pipe(map((response) => response.cast.map((actor) => ({ name: actor.name, path: actor.profile_path || '' }))));
  }
  requestCrew(type: string | null, name: string | number): Observable<any> {
    return this.http.get<CreditsResponse>(`/${type}/${name}/credits`).pipe(map((response) => response.crew));
  }
  requestDetails(type: string | null, name: string | number): Observable<Details> {
    return this.http
      .get<SeriesCollectionDescriptionDTO | MovieCollectionDescriptionDTO>(`/${type}/${name}`)
      .pipe(map((response) => detailsMapper(response)));
  }
}
