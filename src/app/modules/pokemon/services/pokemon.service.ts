import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pokemon } from '../models';
import { PokemonImageService } from './pokemon-image.service';

const { localApi, pokeApi } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(
    private http: HttpClient,
    private pokemonImageService: PokemonImageService
  ) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${localApi}pokemon`);
  }

  getPokemonWithId(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${localApi}pokedex/${id}`).pipe(
      map((pokemon: Pokemon) => {
        pokemon.image = this.pokemonImageService.getPokeImageUrl(pokemon.id);
        return pokemon;
      })
    );
  }
  // getPokemonWithId(id: number): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(`${pokeApi}pokemon/${id}`).pipe(
  //     map((pokemon: Pokemon) => {
  //       pokemon.image = this.pokemonImageService.getPokeImageUrl(pokemon.id);
  //       return pokemon;
  //     })
  //   );
  //}
}
