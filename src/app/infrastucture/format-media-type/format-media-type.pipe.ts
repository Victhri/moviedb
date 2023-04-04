import { Pipe, PipeTransform } from '@angular/core';
import { MovieCollection, SeriesCollection } from 'src/app/moviedb-collections/moviedb-collection';
import { CardContents } from '../ui-card/ui-card';

@Pipe({
  name: 'formatMediaType',
})
export class FormatMediaTypePipe implements PipeTransform {
  transform(value: SeriesCollection | MovieCollection): CardContents {
    if ('title' in value) {
      return {
        title: value.title,
        releaseDate: value.releaseDate,
        popularity: value.popularity,
        path: value.path,
      };
    }

    return {
      title: value.name,
      releaseDate: value.firstAirDate,
      popularity: value.popularity,
      path: value.path,
    };
  }
}
