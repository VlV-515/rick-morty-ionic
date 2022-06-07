import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterInt, Result } from '../interfaces/character-model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private readonly http: HttpClient) {}
  getAll(): Observable<CharacterInt> {
    return this.http.get<CharacterInt>(`${environment.urlAPI}/character`);
  }
  getOne(id: string): Observable<Result> {
    return this.http.get<Result>(`${environment.urlAPI}/character/${id}`);
  }
}
