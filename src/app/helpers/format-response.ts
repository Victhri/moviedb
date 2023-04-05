import { MediaType, MovieCollectionDTO, SeriesCollectionDTO } from '../moviedb-collections/moviedb-collection';

export function formatResponse(data: (MovieCollectionDTO | SeriesCollectionDTO)[]): any[] {
  return data.map(function (item) {
    if ('title' in item) {
      return {
        id: item.id,
        title: item.title,
        mediaType: MediaType.Movie,
        popularity: item.vote_average,
        path: item.backdrop_path,
        releaseDate: item.release_date,
      };
    }

    return {
      id: item.id,
      name: item.name,
      mediaType: MediaType.Serials,
      popularity: item.vote_average,
      path: item.backdrop_path,
      firstAirDate: item.first_air_date,
    };
  });
}
