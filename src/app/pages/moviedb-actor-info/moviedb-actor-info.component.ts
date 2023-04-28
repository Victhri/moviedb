import { Component } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviedbActorInfoApiService } from './moviedb-actor-info-api.service';
import { ActorInfo, ActorMovie, ActorMovieDTO, ActorSeries, ActorSeriesDTO, CombinedResponse } from './actor-info';
import { ActorInfoMapper } from 'src/app/helpers/format-response';
import { MediaType } from '../moviedb-collections/moviedb-collection';

@Component({
  selector: 'app-moviedb-actor-info',
  templateUrl: './moviedb-actor-info.component.html',
  styleUrls: ['./moviedb-actor-info.component.scss'],
})
export class MoviedbActorInfoComponent {
  public actorMovies$: Observable<CombinedResponse> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.actorApi.getList(paramMap.get('name'))),
    map(({ cast, crew }) => ({
      cast: cast.map((item) => this.CombinedResponseWrapper(item)),
      crew: crew.map((item) => this.CombinedResponseWrapper(item)),
    }))
  );
  public actorInfo$: Observable<ActorInfo> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.actorApi.getInfo(paramMap.get('name'))),
    map((response) => ActorInfoMapper(response))
  );
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly actorApi: MoviedbActorInfoApiService) {}

  CombinedResponseWrapper(data: ActorMovieDTO | ActorSeriesDTO): ActorMovie | ActorSeries {
    if (data.media_type === MediaType.Movie) {
      return {
        id: data.id,
        title: data.title,
        mediaType: MediaType.Movie,
        popularity: data.popularity,
        path: data.backdrop_path ?? '',
        releaseDate: data.release_date,
        character: data.character,
      };
    }
    if (data.media_type === MediaType.Serials) {
      return {
        id: data.id,
        name: data.name,
        mediaType: MediaType.Serials,
        popularity: data.popularity,
        path: data.backdrop_path ?? '',
        firstAirDate: data.first_air_date,
        character: data.character,
      };
    }
    throw new Error('The media type should be person, movie or tv');
  }
}
