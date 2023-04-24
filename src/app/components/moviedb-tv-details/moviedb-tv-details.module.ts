import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbTvDetailsComponent } from './moviedb-tv-details.component';
import { MoviedbDetailsModule } from 'src/app/pages/moviedb-details/moviedb-details.module';

@NgModule({
  declarations: [MoviedbTvDetailsComponent],
  exports: [MoviedbTvDetailsComponent],
  imports: [CommonModule, MoviedbDetailsModule],
})
export class MoviedbTvDetailsModule {}
