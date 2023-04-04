import { MediaType } from '../moviedb-collections/moviedb-collection';

export function formatResponse(data: any[]): any[] {
  return data.map((item) => ({
    id: item.id,
    title: item.name || item.title,
    mediaType: item.title ? MediaType.Movie : MediaType.Serials,
    popularity: item.vote_average,
    path: item.backdrop_path,
    releaseDate: item.release_date || item.first_air_date,
  }));
}
