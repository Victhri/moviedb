import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviedbCollectionsModule } from './pages/moviedb-collections/moviedb-collections.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './infrastucture/http/auth.interceptor';
import { MoviedbMovieDetailsModule } from './components/moviedb-movie-details/moviedb-movie-details.module';
import { MoviedbTvDetailsModule } from './components/moviedb-tv-details/moviedb-tv-details.module';
import { MoviedbDetailsModule } from './pages/moviedb-details/moviedb-details.module';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviedbCollectionsModule,
    MoviedbDetailsModule,
    HttpClientModule,
    PageNotFoundModule,
    MoviedbMovieDetailsModule,
    MoviedbTvDetailsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
