import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import { MovieCollectionDTO, SeriesCollectionDTO, MovieCollection, SeriesCollection } from './moviedb-collection';
import { formatResponse } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedTrendingApiService {
  constructor(private readonly http: HttpClient) {}

  private getTrendingMovie(time: string): Observable<MovieCollectionDTO[]> {
    return this.http.get<Moviedb<MovieCollectionDTO[]>>(`/trending/movie/${time}`).pipe(map((response) => response.results));
  }
  private getTrendingSeries(time: string): Observable<SeriesCollectionDTO[]> {
    return this.http.get<Moviedb<SeriesCollectionDTO[]>>(`/trending/tv/${time}`).pipe(map((response) => response.results));
  }

  getTrends(time: string): Observable<(MovieCollection | SeriesCollection)[]> {
    return forkJoin([this.getTrendingMovie(time), this.getTrendingSeries(time)]).pipe(
      map(([movies, series]) => formatResponse([...movies, ...series]))
    );
  }
}
