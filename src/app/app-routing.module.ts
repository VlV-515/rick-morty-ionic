import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'characters-list',
    loadChildren: () =>
      import('./pages/characterslist/characterslist.module').then(
        (m) => m.CharacterslistPageModule
      ),
  },
  {
    path: 'character-detail/:id',
    loadChildren: () =>
      import('./pages/character-detail/character-detail.module').then(
        (m) => m.CharacterDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
