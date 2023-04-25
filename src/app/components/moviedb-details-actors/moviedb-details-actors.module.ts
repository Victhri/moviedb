import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsActorsComponent } from './moviedb-details-actors.component';
import { ImageSourceModule } from 'src/app/infrastucture/image-source/image-source.module';

@NgModule({
  declarations: [MoviedbDetailsActorsComponent],
  exports: [MoviedbDetailsActorsComponent],
  imports: [CommonModule, ImageSourceModule],
})
export class MoviedbDetailsActorsModule {}
