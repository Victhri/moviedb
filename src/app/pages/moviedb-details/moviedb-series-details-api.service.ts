import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SeriesCollectionDescriptionDTO, MovieCollectionDescriptionDTO, CreditsResponse, Details } from './moviedb-series-details';
import { detailsMapper } from 'src/app/helpers/format-response';

@Injectable({
  providedIn: 'root',
})
export class MoviedbSeriesDetailsApiService {
  constructor(private readonly http: HttpClient) {}

  getData(type: string | null, name: string | number): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`/${type}/${name}/credits`);
  }

  requestDetails(type: string | null, name: string | number): Observable<Details> {
    return this.http
      .get<SeriesCollectionDescriptionDTO | MovieCollectionDescriptionDTO>(`/${type}/${name}`)
      .pipe(map((response) => detailsMapper(response)));
  }
}
