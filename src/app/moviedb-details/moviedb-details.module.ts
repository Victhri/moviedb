import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsComponent } from './moviedb-details.component';

@NgModule({
  declarations: [MoviedbDetailsComponent],
  exports: [MoviedbDetailsComponent],
  imports: [CommonModule],
})
export class MoviedbDetailsModule {}
