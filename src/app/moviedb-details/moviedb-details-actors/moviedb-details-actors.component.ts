import { Component, Input } from '@angular/core';
import { ActorCollection } from '../moviedb-series-details';

@Component({
  selector: 'app-moviedb-details-actors',
  templateUrl: './moviedb-details-actors.component.html',
  styleUrls: ['./moviedb-details-actors.component.scss'],
})
export class MoviedbDetailsActorsComponent {
  @Input() actor: ActorCollection = {
    name: '',
    path: '',
  };
}
