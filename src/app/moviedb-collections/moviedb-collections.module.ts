import { NgModule } from '@angular/core';
import { MoviedbCollectionsComponent } from './moviedb-collections.component';
import { MoviedbTrendingModule } from '../moviedb-trending/moviedb-trending.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MoviedbTrendingModule],
  exports: [MoviedbCollectionsComponent],
  declarations: [MoviedbCollectionsComponent],
  providers: [],
})
export class MoviedbCollectionsModule {}
