import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSourcePipe } from './image-source.pipe';

@NgModule({
  declarations: [ImageSourcePipe],
  exports: [ImageSourcePipe],
  imports: [CommonModule],
})
export class ImageSourceModule {}
