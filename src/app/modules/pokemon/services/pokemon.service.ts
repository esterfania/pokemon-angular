import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Api, PokemonCard } from '../models';
import { Pokemon } from '../models/pokemon.model';

const { pokeApi, tcgApi, pokeApiGlitch, pokedexImageApi } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getApis(): Observable<Api[]> {
    return this.http.get<Api[]>(pokeApi).pipe(
      map((res: object) => {
        return Object.entries(res).map((item) => {
          return {
            name: item[0],
            url: item[1],
          };
        });
      })
    );
  }
  getPokemonsCards(): Observable<PokemonCard> {
    return this.http.get<PokemonCard[]>(`${tcgApi}cards`).pipe(pluck('cards'));
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>('assets/data/pokemon.json')
      .pipe(pluck('pokemon'));
  }
  getPokemonSpecies(id: number): any {
    return this.http.get<any>(`${pokeApi}pokemon-species/${id}`);
  }
  getPokemonData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  getPokeImageUrl(id: number): string {
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  }
  getPokemonWithID(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${pokeApi}pokemon/${id}`);
  }
  getPokemonsGlitchApi(id: number): string {
    return `${pokeApiGlitch}${id}.png`;
  }
  getPokedexImageUrl(id: number) {
    return `${pokedexImageApi}${id}.png`;
  }
}
