import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviedbCollection } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';

@Injectable({
  providedIn: 'root',
})
export class MoviedTrendingApiService {
  constructor(private readonly http: HttpClient) {}

  requestMovies(type: string, time: string): Observable<MoviedbCollection[]> {
    const params = new HttpParams({
      fromObject: {
        api_key: '3386bab6b90349650a531f1d4f14e47c',
      },
    });
    return this.http
      .get<Moviedb<MoviedbCollection[]>>(`https://api.themoviedb.org/3/trending/${type}/${time}`, { params })
      .pipe(map((response) => response.results));
  }
}
