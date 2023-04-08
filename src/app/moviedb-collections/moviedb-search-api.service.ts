import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moviedb } from '../infrastucture/http/moviedb-http';
import {
  MovieCollection,
  SeriesCollection,
  PersonCollection,
  MovieCollectionDTO,
  SeriesCollectionDTO,
  PersonCollectionDTO,
} from './moviedb-collection';
import { searchMapper } from '../helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedbSearchApiService {
  constructor(private readonly http: HttpClient) {}
  getResult(query: any): Observable<(MovieCollection | SeriesCollection | PersonCollection)[]> {
    const params = new HttpParams({
      fromObject: {
        query: query,
      },
    });
    return this.http.get<Moviedb<(MovieCollectionDTO | SeriesCollectionDTO | PersonCollectionDTO)[]>>(`/search/multi`, { params }).pipe(
      map((response) => response.results),
      map((collection) => collection.map((item) => searchMapper(item)))
    );
  }
}
