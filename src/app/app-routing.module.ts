import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./pages/series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'releases',
    loadChildren: () => import('./pages/releases/releases.module').then( m => m.ReleasesPageModule)
  },
  {
    path: 'mwatched',
    loadChildren: () => import('./pages/mwatched/mwatched.module').then( m => m.MwatchedPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./pages/upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }