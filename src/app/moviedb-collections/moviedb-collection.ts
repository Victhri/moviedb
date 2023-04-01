export interface MovieCollection {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  adult: boolean;
  title: string;
  backdrop_path: string | null;
  genre_ids: Number[];
  media_type: string;
  original_language: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SeriesCollection {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: String[];
  genre_ids: Number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}
