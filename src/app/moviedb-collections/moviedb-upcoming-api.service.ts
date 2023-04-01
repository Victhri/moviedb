import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieCollection } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';

@Injectable({
  providedIn: 'root',
})
export class MoviedbUpcomingApiService {
  constructor(private readonly http: HttpClient) {}

  getUpcoming(type: string): Observable<MovieCollection[]> {
    const params = new HttpParams({
      fromObject: {
        api_key: '3386bab6b90349650a531f1d4f14e47c',
      },
    });

    return this.http
      .get<Moviedb<MovieCollection[]>>(`https://api.themoviedb.org/3/movie/${type}`, { params })
      .pipe(map((response) => response.results));
  }
}
