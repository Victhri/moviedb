import { Component, Input } from '@angular/core';
import { CrewCollection } from 'src/app/pages/moviedb-details/moviedb-series-details';

@Component({
  selector: 'app-moviedb-details-crew',
  templateUrl: './moviedb-details-crew.component.html',
  styleUrls: ['./moviedb-details-crew.component.scss'],
})
export class MoviedbDetailsCrewComponent {
  @Input() crew: CrewCollection = {
    name: '',
  };
}
