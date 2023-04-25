import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { MoviedbSearchApiService } from './moviedb-search-api.service';
import { SearchCollection } from 'src/app/helpers/format-response';

@Component({
  selector: 'app-moviedb-live-search',
  templateUrl: './moviedb-live-search.component.html',
  styleUrls: ['./moviedb-live-search.component.scss'],
})
export class MoviedbLiveSearchComponent {
  search = new FormControl('');
  showSearch$: Observable<boolean> = this.search.valueChanges.pipe(map((value) => (value ?? '').length > 2));

  searchResults$: Observable<SearchCollection[]> = this.search.valueChanges.pipe(
    filter(Boolean),
    filter((value) => value.length > 3),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((value) => this.searchApi.getResult(value))
  );

  constructor(private readonly searchApi: MoviedbSearchApiService) {}
}
