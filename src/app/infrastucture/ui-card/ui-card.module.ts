import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card.component';

@NgModule({
  declarations: [UiCardComponent],
  exports: [UiCardComponent],
  imports: [CommonModule],
})
export class UiCardModule {}
