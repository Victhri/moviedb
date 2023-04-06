import { NgModule } from '@angular/core';
import { MoviedbCollectionsComponent } from './moviedb-collections.component';
import { CommonModule } from '@angular/common';
import { UiCardModule } from '../infrastucture/ui-card/ui-card.module';
import { RouterLink } from '@angular/router';
import { FormatMediaTypeModule } from '../infrastucture/format-media-type/format-media-type.module';

@NgModule({
  imports: [CommonModule, UiCardModule, RouterLink, FormatMediaTypeModule],
  exports: [MoviedbCollectionsComponent],
  declarations: [MoviedbCollectionsComponent],
  providers: [],
})
export class MoviedbCollectionsModule {}
