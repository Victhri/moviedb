export interface MovieCollectionDTO {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  media_type?: MediaType.Movie;
}
export interface SeriesCollectionDTO {
  id: number;
  name: string;
  original_title: string;
  poster_path: string;
  overview: string;
  first_air_date: string;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  media_type?: MediaType.Serials;
}
export interface PersonCollectionDTO {
  adult: boolean;
  gender: number;
  id: number;
  known_for: (SeriesCollectionDTO | MovieCollection)[];
  known_for_department: string;
  media_type?: MediaType.Person;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}
export interface MovieCollection {
  id: number;
  path?: string;
  releaseDate: string;
  title: string;
  mediaType: MediaType.Movie;
  popularity: number;
}

export interface SeriesCollection {
  id: number;
  path?: string;
  firstAirDate: string;
  name: string;
  popularity: number;
  mediaType: MediaType.Serials;
}
export interface PersonCollection {
  id: number;
  path?: string;
  name: string;
  popularity: number;
  mediaType: MediaType.Person;
}

export enum MediaType {
  Movie = 'movie',
  Serials = 'tv',
  Person = 'person',
}
