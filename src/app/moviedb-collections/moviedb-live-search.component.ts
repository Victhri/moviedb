import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter, tap } from 'rxjs/operators';
import { MoviedbSearchApiService } from './moviedb-search-api.service';
import { SeriesCollection, MovieCollection, PersonCollection } from './moviedb-collection';

@Component({
  selector: 'app-moviedb-live-search',
  templateUrl: './moviedb-live-search.component.html',
  styleUrls: ['./moviedb-live-search.component.scss'],
})
export class MoviedbLiveSearchComponent {
  search = new FormControl('');
  showSearch = false;
  result: (PersonCollection | MovieCollection | SeriesCollection)[] = [];
  public searchResults = {
    contentsEmpty$: this.search.valueChanges
      .pipe(
        filter((value) => value!.length < 3),
        tap(() => {
          this.showSearch = false;
        })
      )
      .subscribe(),
    contentsFull$: this.search.valueChanges
      .pipe(
        filter((value) => value!.length > 3),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((value) => this.searchApi.getResult(value)),
        tap(() => {
          this.showSearch = true;
        })
      )
      .subscribe((data) => (this.result = data)),
  };

  constructor(private readonly searchApi: MoviedbSearchApiService) {}
}
