import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedbDetailsComponent } from './moviedb-details/moviedb-details.component';
import { MoviedbCollectionsComponent } from './moviedb-collections/moviedb-collections.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    component: MoviedbDetailsComponent,
  },
  {
    path: 'movie/:name',
    component: MoviedbDetailsComponent,
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
