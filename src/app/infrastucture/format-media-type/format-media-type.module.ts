import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatMediaTypePipe } from './format-media-type.pipe';

@NgModule({
  declarations: [FormatMediaTypePipe],
  exports: [FormatMediaTypePipe],
  imports: [CommonModule],
})
export class FormatMediaTypeModule {}
