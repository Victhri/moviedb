import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbMovieDetailsComponent } from './moviedb-movie-details.component';
import { MoviedbDetailsModule } from 'src/app/pages/moviedb-details/moviedb-details.module';

@NgModule({
  declarations: [MoviedbMovieDetailsComponent],
  exports: [MoviedbMovieDetailsComponent],
  imports: [CommonModule, MoviedbDetailsModule],
})
export class MoviedbMovieDetailsModule {}
