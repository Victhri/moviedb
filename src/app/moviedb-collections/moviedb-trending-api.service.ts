import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import { MovieCollection, SeriesCollection } from './moviedb-collection';
import { formatResponse } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedTrendingApiService {
  constructor(private readonly http: HttpClient) {}

  private getTrendingMovie(time: string): Observable<MovieCollection[]> {
    return this.http.get<Moviedb<MovieCollection[]>>(`/trending/movie/${time}`).pipe(map((response) => response.results));
  }
  private getTrendingSeries(time: string): Observable<SeriesCollection[]> {
    return this.http.get<Moviedb<SeriesCollection[]>>(`/trending/tv/${time}`).pipe(map((response) => response.results));
  }

  getTrends(time: string): Observable<MovieCollection[]> {
    return forkJoin([this.getTrendingMovie(time), this.getTrendingSeries(time)]).pipe(
      map(([movies, series]) => formatResponse([...movies, ...series]))
    );
  }
}
