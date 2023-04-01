import { Component, Input } from '@angular/core';

interface CardContents {
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  poster_path: string;
  vote_average: number;
  media_type: string;
}

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss'],
})
export class UiCardComponent {
  @Input() contents: CardContents = {
    title: '',
    name: '',
    poster_path: '',
    release_date: '',
    first_air_date: '',
    vote_average: 0,
    media_type: '',
  };
}
