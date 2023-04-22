import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsComponent } from './moviedb-details.component';
import { ImageSourceModule } from '../infrastucture/image-source/image-source.module';
import { FormatMediaTypeModule } from '../infrastucture/format-media-type/format-media-type.module';
import { MoviedbDetailsInfoComponent } from './moviedb-details-info/moviedb-details-info.component';
import { MoviedbDetailsCrewComponent } from './moviedb-details-crew/moviedb-details-crew.component';
import { MoviedbDetailsActorsComponent } from './moviedb-details-actors/moviedb-details-actors.component';

@NgModule({
  declarations: [MoviedbDetailsComponent, MoviedbDetailsInfoComponent, MoviedbDetailsCrewComponent, MoviedbDetailsActorsComponent],
  exports: [MoviedbDetailsComponent],
  imports: [CommonModule, ImageSourceModule, FormatMediaTypeModule],
})
export class MoviedbDetailsModule {}
