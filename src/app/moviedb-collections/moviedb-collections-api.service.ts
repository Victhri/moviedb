import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, timeInterval } from 'rxjs/operators';
import { MoviedbCollection } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';

@Injectable({
  providedIn: 'root',
})
export class MoviedbCollectionsApiService {
  constructor(private readonly http: HttpClient) {}

  requestMovies(name: string, type: string): Observable<MoviedbCollection[]> {
    const params = new HttpParams({
      fromObject: {
        api_key: '3386bab6b90349650a531f1d4f14e47c',
      },
    });
    return this.http
      .get<Moviedb<MoviedbCollection[]>>(`https://api.themoviedb.org/3/${name}/${type}`, { params })
      .pipe(map((response) => response.results));
  }
}
