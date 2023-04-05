import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieCollection } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import { formatResponse } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedbUpcomingApiService {
  constructor(private readonly http: HttpClient) {}

  getUpcoming(type: string): Observable<MovieCollection[]> {
    return this.http.get<Moviedb<MovieCollection[]>>(`/movie/${type}`).pipe(map(({ results }) => formatResponse(results)));
  }
}
