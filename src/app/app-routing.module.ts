import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'animes',
    loadChildren: () => import('./animes/animes.module').then( m => m.AnimesPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'releases',
    loadChildren: () => import('./releases/releases.module').then( m => m.ReleasesPageModule)
  },
  {
    path: 'mwatched',
    loadChildren: () => import('./mwatched/mwatched.module').then( m => m.MwatchedPageModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
