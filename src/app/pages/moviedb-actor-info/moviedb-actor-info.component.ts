import { Component } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MoviedbActorInfoApiService } from './moviedb-actor-info-api.service';
import { ActorInfo, CombinedResponse } from './actor-info';
import { ActorInfoMapper, CombinedResponseWrapper } from 'src/app/helpers/format-response';

@Component({
  selector: 'app-moviedb-actor-info',
  templateUrl: './moviedb-actor-info.component.html',
  styleUrls: ['./moviedb-actor-info.component.scss'],
})
export class MoviedbActorInfoComponent {
  public actorMovies$: Observable<CombinedResponse> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.actorApi.getList(paramMap.get('name'))),
    map(({ cast, crew }) => ({
      cast: cast.map((item) => CombinedResponseWrapper(item)),
      crew: crew.map((item) => CombinedResponseWrapper(item)),
    }))
  );
  public actorInfo$: Observable<ActorInfo> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.actorApi.getInfo(paramMap.get('name'))),
    map((response) => ActorInfoMapper(response))
  );
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly actorApi: MoviedbActorInfoApiService) {}
}
