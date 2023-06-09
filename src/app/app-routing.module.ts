import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMovieComponent } from './components/list/list-movie.component';
import { MovieDetailComponent } from './components/detail/movie-detail.component';

const routes: Routes = [
  {
    path: 'movie',
    component: ListMovieComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  },
  {
    path: '',
    redirectTo: '/movie',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
