import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moviedb } from '../../infrastucture/http/moviedb-http';
import { moviesMapper } from '../../helpers/format-response';
import { MovieCollection, MovieCollectionDTO } from './moviedb-collection';

@Injectable({
  providedIn: 'root',
})
export class MoviedbUpcomingApiService {
  constructor(private readonly http: HttpClient) {}

  getUpcoming(type: string): Observable<MovieCollection[]> {
    return this.http.get<Moviedb<MovieCollectionDTO[]>>(`/movie/${type}`).pipe(
      map((response) => response.results),
      map((collection) => collection.map((item) => moviesMapper(item)))
    );
  }
}
