import {
  MediaType,
  MovieCollection,
  MovieCollectionDTO,
  SeriesCollection,
  SeriesCollectionDTO,
} from '../moviedb-collections/moviedb-collection';

export function seriesMapper(item: SeriesCollectionDTO): SeriesCollection {
  return {
    id: item.id,
    name: item.name,
    mediaType: MediaType.Serials,
    popularity: item.vote_average,
    path: item.backdrop_path ?? '',
    firstAirDate: item.first_air_date,
  };
}
export function moviesMapper(item: MovieCollectionDTO): MovieCollection {
  return {
    id: item.id,
    title: item.title,
    mediaType: MediaType.Movie,
    popularity: item.vote_average,
    path: item.backdrop_path ?? '',
    releaseDate: item.release_date,
  };
}
