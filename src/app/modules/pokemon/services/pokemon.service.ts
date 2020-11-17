import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Api, PokemonCard, Pokemon } from '../models';

const { pokeApi } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>('assets/data/pokemon.json')
      .pipe(pluck('pokemon'));
  }

  getPokemonWithID(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${pokeApi}pokemon/${id}`);
  }
}
