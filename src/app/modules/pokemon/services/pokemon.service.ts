import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pokemon } from '../models';
import { Ability } from '../models/ability.model';
import { PokemonImageService } from './pokemon-image.service';

const { pokeApi, localApi } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(
    private http: HttpClient,
    private pokemonImageService: PokemonImageService
  ) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>('assets/data/pokemon.json')
      .pipe(pluck('pokemon'));
  }

  getPokemonWithId(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${localApi}pokemon/${id}`).pipe(
      map((pokemon: Pokemon) => {
        pokemon.image = this.pokemonImageService.getPokeImageUrl(pokemon.id);
        return pokemon;
      })
    );
  }
}
