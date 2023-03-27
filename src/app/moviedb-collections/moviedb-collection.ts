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
