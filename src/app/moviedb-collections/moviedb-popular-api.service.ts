import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieCollectionDTO, SeriesCollectionDTO, MovieCollection, SeriesCollection } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import { seriesMapper, moviesMapper } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedbPopularApiService {
  constructor(private readonly http: HttpClient) {}

  private getPopularMovies(type: string): Observable<MovieCollection[]> {
    return this.http.get<Moviedb<MovieCollectionDTO[]>>(`/movie/${type}`).pipe(
      map((response) => response.results),
      map((collection) => collection.map((item) => moviesMapper(item)))
    );
  }
  private getPopularSeries(type: string): Observable<SeriesCollection[]> {
    return this.http.get<Moviedb<SeriesCollectionDTO[]>>(`/tv/${type}`).pipe(
      map((response) => response.results),
      map((collection) => collection.map((item) => seriesMapper(item)))
    );
  }

  getPopular(type: string): Observable<(MovieCollection | SeriesCollection)[]> {
    return forkJoin([this.getPopularMovies(type), this.getPopularSeries(type)]).pipe(map(([movies, series]) => [...movies, ...series]));
  }
}
