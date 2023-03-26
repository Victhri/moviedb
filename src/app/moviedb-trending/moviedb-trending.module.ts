import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbTrendingComponent } from './moviedb-trending.component';

@NgModule({
  declarations: [MoviedbTrendingComponent],
  exports: [MoviedbTrendingComponent],
  imports: [CommonModule],
})
export class MoviedbTrendingModule {}
