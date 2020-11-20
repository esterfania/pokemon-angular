import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pokemon } from '../models';
import { PokemonImageService } from './pokemon-image.service';
import { capitalize } from '../../../shared/helpers/capitalize';

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
    return this.http
      .get<Pokemon[]>(`${localApi}pokemon`)
      .pipe(
        map((pokemons) =>
          pokemons.map((pokemon: Pokemon) =>
            this.setDetailsPokemon(
              `assets/data/pokemon/${pokemon.id}.png`,
              pokemon
            )
          )
        )
      );
  }

  getPokemonWithId(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${localApi}pokedex/${id}`)
      .pipe(
        map((pokemon: Pokemon) =>
          this.setDetailsPokemon(
            this.pokemonImageService.getPokeImageUrl(pokemon.id),
            pokemon
          )
        )
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
  private setDetailsPokemon(imageUrl: string, pokemon: Pokemon): Pokemon {
    pokemon.image = imageUrl;
    pokemon.name = capitalize(pokemon.name);
    return pokemon;
  }
}
