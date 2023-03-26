import { NgModule } from '@angular/core';
import { MoviedbCollectionsComponent } from './moviedb-collections.component';
import { CommonModule } from '@angular/common';
import { UiCardModule } from '../infrastucture/ui-card/ui-card.module';

@NgModule({
  imports: [CommonModule, UiCardModule],
  exports: [MoviedbCollectionsComponent],
  declarations: [MoviedbCollectionsComponent],
  providers: [],
})
export class MoviedbCollectionsModule {}
