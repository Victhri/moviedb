import { NgModule } from '@angular/core';
import { MoviedbCollectionsComponent } from './moviedb-collections.component';
import { CommonModule } from '@angular/common';
import { UiCardModule } from '../infrastucture/ui-card/ui-card.module';
import { RouterLink } from '@angular/router';
import { FormatMediaTypeModule } from '../infrastucture/format-media-type/format-media-type.module';
import { MoviedbLiveSearchComponent } from './moviedb-live-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, UiCardModule, RouterLink, FormatMediaTypeModule, ReactiveFormsModule],
  exports: [MoviedbCollectionsComponent],
  declarations: [MoviedbCollectionsComponent, MoviedbLiveSearchComponent],
  providers: [],
})
export class MoviedbCollectionsModule {}
