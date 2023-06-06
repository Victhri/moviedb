import {
  MediaType,
  MovieCollection,
  MovieCollectionDTO,
  SeriesCollection,
  SeriesCollectionDTO,
} from '../moviedb-collections/moviedb-collection';

export interface ActorDTO {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday?: string;
  gender: number;
  homepage?: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}
export interface ActorInfo {
  name: string;
  biography: string;
  birthday: string;
  placeOfBirth: string;
  img: string;
  famousFor: string;
}
export interface CombinedResponse {
  cast: (ActorMovie | ActorSeries)[];
  crew: (ActorMovie | ActorSeries)[];
}
export interface CombinedResponseDTO {
  cast: (ActorMovieDTO | ActorSeriesDTO)[];
  crew: (ActorMovieDTO | ActorSeriesDTO)[];
}

export interface ActorMovieDTO {
  adult: boolean;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType.Movie;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ActorSeriesDTO {
  adult: boolean;
  backdrop_path: string;
  character: string;
  credit_id: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType.Serials;
  order: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ActorMovie {
  id: number;
  title: string;
  mediaType: MediaType.Movie;
  popularity: number;
  path?: string;
  releaseDate: string;
  character: string;
}
export interface ActorSeries {
  id: number;
  name: string;
  mediaType: MediaType.Serials;
  popularity: number;
  path?: string;
  firstAirDate: string;
  character: string;
}
