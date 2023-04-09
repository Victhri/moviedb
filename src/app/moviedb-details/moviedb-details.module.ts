import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsComponent } from './moviedb-details.component';
import { ImageSourceModule } from '../infrastucture/image-source/image-source.module';
import { FormatMediaTypeModule } from '../infrastucture/format-media-type/format-media-type.module';

@NgModule({
  declarations: [MoviedbDetailsComponent],
  exports: [MoviedbDetailsComponent],
  imports: [CommonModule, ImageSourceModule, FormatMediaTypeModule],
})
export class MoviedbDetailsModule {}
