import { Component, Input } from '@angular/core';
import { CardContents } from './ui-card';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss'],
})
export class UiCardComponent {
  @Input() contents: CardContents = {
    title: '',
    path: '',
    releaseDate: '',
    popularity: 0,
  };
}
