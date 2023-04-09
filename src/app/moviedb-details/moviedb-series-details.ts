export interface MovieCollectionDescriptionDTO {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
}

export interface SeriesCollectionDescriptionDTO {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
}

export interface CreditsResponse {
  cast: any[];
  crew: any[];
}
export interface Genre {
  id: number;
  name: string;
}
export interface Details {
  title: string;
  path: string;
  description: string;
  releaseDate: string;
  genres: Array<Genre>;
}

export interface ActorCollection {
  name: string;
  path: string;
}
