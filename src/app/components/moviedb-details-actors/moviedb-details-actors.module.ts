import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsActorsComponent } from './moviedb-details-actors.component';
import { ImageSourceModule } from 'src/app/infrastucture/image-source/image-source.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [MoviedbDetailsActorsComponent],
  exports: [MoviedbDetailsActorsComponent],
  imports: [CommonModule, ImageSourceModule, RouterLink],
})
export class MoviedbDetailsActorsModule {}
