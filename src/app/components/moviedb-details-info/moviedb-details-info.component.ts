import { Component, Input } from '@angular/core';
import { Details } from 'src/app/pages/moviedb-details/moviedb-series-details';

@Component({
  selector: 'app-moviedb-details-info',
  templateUrl: './moviedb-details-info.component.html',
  styleUrls: ['./moviedb-details-info.component.scss'],
})
export class MoviedbDetailsInfoComponent {
  @Input() contents: Details = {
    title: '',
    path: '',
    description: '',
    releaseDate: '',
    genres: [{ id: 0, name: '' }],
  };
}
