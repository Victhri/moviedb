import { NgModule } from '@angular/core';
import { MoviedbCollectionsComponent } from './moviedb-collections.component';
import { CommonModule } from '@angular/common';
import { UiCardModule } from '../infrastucture/ui-card/ui-card.module';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, UiCardModule, RouterLink],
  exports: [MoviedbCollectionsComponent],
  declarations: [MoviedbCollectionsComponent],
  providers: [],
})
export class MoviedbCollectionsModule {}
