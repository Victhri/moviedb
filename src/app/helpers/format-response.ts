import {
  MediaType,
  MovieCollection,
  MovieCollectionDTO,
  PersonCollection,
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

export function searchMapper(item: any): MovieCollection | SeriesCollection | PersonCollection {
  if (item.media_type === MediaType.Movie) {
    return {
      id: item.id,
      title: item.title,
      mediaType: MediaType.Movie,
      popularity: item.vote_average,
      path: item.backdrop_path ?? '',
      releaseDate: item.release_date,
    };
  }
  if (item.media_type === MediaType.Serials) {
    return {
      id: item.id,
      name: item.name,
      mediaType: MediaType.Serials,
      popularity: item.vote_average,
      path: item.backdrop_path ?? '',
      firstAirDate: item.first_air_date,
    };
  }
  return {
    id: item.id,
    name: item.name,
    mediaType: MediaType.Person,
    popularity: item.popularity,
    path: item.profile_path ?? '',
  };
}
