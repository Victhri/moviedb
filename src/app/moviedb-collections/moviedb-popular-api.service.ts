import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieCollectionDTO, MovieCollection, SeriesCollectionDTO } from './moviedb-collection';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import { formatResponse } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedbPopularApiService {
  constructor(private readonly http: HttpClient) {}

  private getPopularMovies(type: string): Observable<MovieCollectionDTO[]> {
    return this.http.get<Moviedb<MovieCollectionDTO[]>>(`/movie/${type}`).pipe(map((response) => response.results));
  }
  private getPopularSeries(type: string): Observable<SeriesCollectionDTO[]> {
    return this.http.get<Moviedb<SeriesCollectionDTO[]>>(`/tv/${type}`).pipe(map((response) => response.results));
  }

  getPopular(type: string): Observable<MovieCollection[]> {
    return forkJoin([this.getPopularMovies(type), this.getPopularSeries(type)]).pipe(
      map(([movies, series]) => formatResponse([...movies, ...series]))
    );
  }
}
