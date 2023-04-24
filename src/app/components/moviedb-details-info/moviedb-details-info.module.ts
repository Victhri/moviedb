import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsInfoComponent } from './moviedb-details-info.component';
import { ImageSourceModule } from 'src/app/infrastucture/image-source/image-source.module';

@NgModule({
  declarations: [MoviedbDetailsInfoComponent],
  exports: [MoviedbDetailsInfoComponent],
  imports: [CommonModule, ImageSourceModule],
})
export class MoviedbDetailsInfoModule {}
