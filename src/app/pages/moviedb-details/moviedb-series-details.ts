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
  media_type?: string;
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
  media_type?: string;
}
export interface CreditsResponse {
  id: number;
  cast: ActorCollectionDTO[];
  crew: CrewCollectionDTO[];
}
export interface CreditsData {
  cast: ActorCollection[];
  crew: CrewCollection[];
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

export interface ActorCollectionDTO {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  order: number;
  original_name: string;
  popularity: number;
  name: string;
  profile_path: string;
}
export interface CrewCollectionDTO {
  adult: boolean;
  credit_id: number;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  original_name: string;
  popularity: number;
  name: string;
  profile_path: string;
}

export interface ActorCollection {
  id: number;
  name: string;
  path: string;
}
export interface CrewCollection {
  name: string;
}
