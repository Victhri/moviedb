import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedbDetailsComponent } from './moviedb-details.component';
import { ImageSourceModule } from 'src/app/infrastucture/image-source/image-source.module';
import { FormatMediaTypeModule } from 'src/app/infrastucture/format-media-type/format-media-type.module';
import { MoviedbDetailsActorsModule } from 'src/app/components/moviedb-details-actors/moviedb-details-actors.module';
import { MoviedbDetailsCrewModule } from 'src/app/components/moviedb-details-crew/moviedb-details-crew.module';
import { MoviedbDetailsInfoModule } from 'src/app/components/moviedb-details-info/moviedb-details-info.module';

@NgModule({
  declarations: [MoviedbDetailsComponent],
  exports: [MoviedbDetailsComponent],
  imports: [
    CommonModule,
    ImageSourceModule,
    FormatMediaTypeModule,
    MoviedbDetailsActorsModule,
    MoviedbDetailsCrewModule,
    MoviedbDetailsInfoModule,
  ],
})
export class MoviedbDetailsModule {}
