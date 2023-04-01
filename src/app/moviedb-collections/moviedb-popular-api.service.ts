import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieCollection } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';

@Injectable({
  providedIn: 'root',
})
export class MoviedbPopularApiService {
  constructor(private readonly http: HttpClient) {}

  getPopular(type: string): Observable<MovieCollection[]> {
    const params = new HttpParams({
      fromObject: {
        api_key: '3386bab6b90349650a531f1d4f14e47c',
      },
    });

    return forkJoin([
      this.http.get<Moviedb<MovieCollection[]>>(`https://api.themoviedb.org/3/movie/${type}`, { params }),
      this.http.get<Moviedb<MovieCollection[]>>(`https://api.themoviedb.org/3/tv/${type}`, { params }),
    ]).pipe(map((response) => [...response[0].results, ...response[1].results]));
  }
}
