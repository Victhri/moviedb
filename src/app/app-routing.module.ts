import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedbCollectionsComponent } from './pages/moviedb-collections/moviedb-collections.component';
import { MoviedbTvDetailsComponent } from './components/moviedb-tv-details/moviedb-tv-details.component';
import { MoviedbMovieDetailsComponent } from './components/moviedb-movie-details/moviedb-movie-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/collections',
  },
  {
    path: 'collections',
    component: MoviedbCollectionsComponent,
  },
  {
    path: 'tv/:name',
    component: MoviedbTvDetailsComponent,
  },
  {
    path: 'movie/:name',
    component: MoviedbMovieDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
