import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterslistPage } from './characterslist.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterslistPageRoutingModule {}
