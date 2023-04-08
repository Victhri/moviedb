import { Pipe, PipeTransform } from '@angular/core';
import { MediaType, MovieCollection, PersonCollection, SeriesCollection } from 'src/app/moviedb-collections/moviedb-collection';
import { CardContents } from '../ui-card/ui-card';

@Pipe({
  name: 'formatMediaType',
})
export class FormatMediaTypePipe implements PipeTransform {
  transform(value: SeriesCollection | MovieCollection | PersonCollection): CardContents {
    if (value.mediaType === MediaType.Movie) {
      return {
        title: value.title,
        releaseDate: value.releaseDate,
        popularity: value.popularity,
        path: value.path ?? '',
      };
    }
    if (value.mediaType === MediaType.Serials) {
      return {
        title: value.name,
        releaseDate: value.firstAirDate,
        popularity: value.popularity,
        path: value.path ?? '',
      };
    }
    return {
      title: value.name,
      popularity: value.popularity,
      path: value.path ?? '',
    };
  }
}
