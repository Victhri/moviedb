import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieItem } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import { formatResponse } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedbUpcomingApiService {
  constructor(private readonly http: HttpClient) {}

  getUpcoming(type: string): Observable<MovieItem[]> {
    return this.http.get<Moviedb<MovieItem[]>>(`/movie/${type}`).pipe(map((response) => formatResponse(response.results)));
  }
}
