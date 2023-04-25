import { Pipe, PipeTransform } from '@angular/core';
import { MediaType, MovieCollection, PersonCollection, SeriesCollection } from 'src/app/pages/moviedb-collections/moviedb-collection';
import { CardContents } from '../ui-card/ui-card';
import { SearchCollection } from 'src/app/helpers/format-response';

@Pipe({
  name: 'formatMediaType',
})
export class FormatMediaTypePipe implements PipeTransform {
  transform(value: SearchCollection): CardContents {
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
