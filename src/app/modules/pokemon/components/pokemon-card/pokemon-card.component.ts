import { Pokemon } from './../../models/pokemon.model';
import { Component, Input } from '@angular/core';

import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  constructor(private pokemonService: PokemonService) {}

  getImageUrl(id: number): string {
    return this.pokemonService.getPokeImageUrl(id);
  }

  errorImage(pokemon: Pokemon): void {
    pokemon.image = this.getImageUrl(pokemon.id);
  }
}
