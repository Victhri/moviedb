import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbActorInfoComponent } from './moviedb-actor-info.component';

@NgModule({
  declarations: [MoviedbActorInfoComponent],
  exports: [MoviedbActorInfoComponent],
  imports: [CommonModule],
})
export class MoviedbActorInfoModule {}
