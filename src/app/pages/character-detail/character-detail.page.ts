import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../characterslist/interfaces/character-model';
import { CharacterService } from '../characterslist/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  id: string;
  infoCharacter: Result = undefined;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly characterSvc: CharacterService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.characterSvc.getOne(this.id).subscribe((res: Result) => {
      this.infoCharacter = res;
    });
  }
}
