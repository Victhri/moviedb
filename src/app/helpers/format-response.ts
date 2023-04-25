import {
  MediaType,
  MovieCollection,
  MovieCollectionDTO,
  PersonCollectionDTO,
  PersonCollection,
  SeriesCollection,
  SeriesCollectionDTO,
} from '../pages/moviedb-collections/moviedb-collection';

import { SeriesCollectionDescriptionDTO, MovieCollectionDescriptionDTO, Details } from '../pages/moviedb-details/moviedb-series-details';

export type SearchCollectionDTO = MovieCollectionDTO | SeriesCollectionDTO | PersonCollectionDTO;
export type SearchCollection = MovieCollection | SeriesCollection | PersonCollection;

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

export function searchMapper(item: SearchCollectionDTO): SearchCollection {
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
  if (item.media_type === MediaType.Person) {
    return {
      id: item.id,
      name: item.name,
      mediaType: MediaType.Person,
      popularity: item.popularity,
      path: item.profile_path ?? '',
    };
  }
  throw new Error('The media type should be person, movie or tv');
}

export function detailsMapper(data: SeriesCollectionDescriptionDTO | MovieCollectionDescriptionDTO): Details {
  if (isMovie(data)) {
    return {
      title: data.title,
      path: data.backdrop_path || '',
      description: data.overview,
      releaseDate: data.release_date,
      genres: data.genres,
    };
  }
  return {
    title: data.name,
    path: data.backdrop_path || '',
    description: data.overview,
    releaseDate: data.first_air_date,
    genres: data.genres,
  };
}

function isMovie(data: SeriesCollectionDescriptionDTO | MovieCollectionDescriptionDTO): data is MovieCollectionDescriptionDTO {
  return 'title' in data;
}
