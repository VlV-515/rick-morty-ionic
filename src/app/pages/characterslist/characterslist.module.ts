import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterslistPageRoutingModule } from './characterslist-routing.module';

import { CharacterslistPage } from './characterslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterslistPageRoutingModule
  ],
  declarations: [CharacterslistPage]
})
export class CharacterslistPageModule {}
