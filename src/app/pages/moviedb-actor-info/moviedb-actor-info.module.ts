import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbActorInfoComponent } from './moviedb-actor-info.component';
import { FormatMediaTypeModule } from 'src/app/infrastucture/format-media-type/format-media-type.module';
import { UiCardModule } from 'src/app/infrastucture/ui-card/ui-card.module';
import { ImageSourceModule } from 'src/app/infrastucture/image-source/image-source.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoviedbActorInfoComponent],
  exports: [MoviedbActorInfoComponent],
  imports: [CommonModule, FormatMediaTypeModule, UiCardModule, ImageSourceModule, RouterModule],
})
export class MoviedbActorInfoModule {}
