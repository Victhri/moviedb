import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedbDetailsComponent } from './moviedb-details/moviedb-details.component';
import { MoviedbCollectionsComponent } from './moviedb-collections/moviedb-collections.component';

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
    path: ':type/:name',
    component: MoviedbDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
