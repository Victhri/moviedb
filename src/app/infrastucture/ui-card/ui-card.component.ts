import { Component, Input } from '@angular/core';

interface CardContents {
  title: string;
  release_date: string;
  poster_path: string | null;
  vote_average: number;
}

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss'],
})
export class UiCardComponent {
  @Input() contents: CardContents = {
    title: '',
    poster_path: '',
    release_date: '',
    vote_average: 0,
  };
}
