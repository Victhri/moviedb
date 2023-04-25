import { Component } from '@angular/core';
import { MediaType } from 'src/app/pages/moviedb-collections/moviedb-collection';

@Component({
  selector: 'app-moviedb-tv-details',
  templateUrl: './moviedb-tv-details.component.html',
  styleUrls: ['./moviedb-tv-details.component.scss'],
})
export class MoviedbTvDetailsComponent {
  tvMediaType: MediaType.Serials = MediaType.Serials;
}
