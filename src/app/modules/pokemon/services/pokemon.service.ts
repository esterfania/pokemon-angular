import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pokemon } from '../../../shared/models';
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
      .get<Pokemon[]>(`../../../../assets/data/json/pokemon.json`)
      .pipe(pluck('pokemon'))
      .pipe(
        map((pokemons: Pokemon[]) =>
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
      .get<Pokemon>(`${pokeApi}pokemon/${id}`)
      .pipe(
        map((pokemon: Pokemon) =>
          this.setDetailsPokemon(
            this.pokemonImageService.getPokeImageUrl(pokemon.id),
            pokemon
          )
        )
      );
  }

  private setDetailsPokemon(imageUrl: string, pokemon: Pokemon): Pokemon {
    pokemon.image = imageUrl;
    pokemon.name = capitalize(pokemon.name);
    return pokemon;
  }
  setCurrentPokemon(pokemon: Pokemon): void {
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
  }
  getCurrentPokemon(pokemonId: number): Pokemon | null {
    const pokemon = JSON.parse(localStorage.getItem('pokemon')) as Pokemon;
    return pokemon.id === pokemonId ? pokemon : null;
  }
}
