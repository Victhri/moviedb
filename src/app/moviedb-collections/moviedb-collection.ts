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
}
export interface MovieCollection {
  id: number;
  path: string;
  releaseDate: string;
  title: string;
  mediaType: MediaType.Movie;
  popularity: number;
}

export interface SeriesCollection {
  id: number;
  path: string;
  firstAirDate: string;
  name: string;
  popularity: number;
  mediaType: MediaType.Serials;
}

export enum MediaType {
  Movie = 'movie',
  Serials = 'tv',
}
