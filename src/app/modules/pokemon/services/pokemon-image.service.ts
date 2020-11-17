import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
const { pokeApiImage } = environment;
@Injectable({
  providedIn: 'root',
})
export class PokemonImageService {
  constructor() {}
  getPokeImageUrl(id: number): string {
    return `${pokeApiImage}${id}.png`;
  }
}
