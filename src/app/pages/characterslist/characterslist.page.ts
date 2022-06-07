import { CharacterService } from './services/character.service';
import { Component, OnInit } from '@angular/core';
import { CharacterInt, Result } from './interfaces/character-model';

@Component({
  selector: 'app-characterslist',
  templateUrl: './characterslist.page.html',
  styleUrls: ['./characterslist.page.scss'],
})
export class CharacterslistPage implements OnInit {
  characters: Result[] = [];
  constructor(private readonly characterSvc: CharacterService) {}

  ngOnInit() {
    this.characterSvc.getAll().subscribe((res: CharacterInt) => {
      this.characters = res.results;
    });
  }
}
