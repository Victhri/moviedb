import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card.component';
import { ImageSourceModule } from '../image-source/image-source.module';

@NgModule({
  declarations: [UiCardComponent],
  exports: [UiCardComponent],
  imports: [CommonModule, ImageSourceModule],
})
export class UiCardModule {}
