import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, TemplateRef } from '@angular/core';

import { PokemonImageService } from '../../services/pokemon-image.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  constructor(private pokemonImageService: PokemonImageService) {}

  getImageUrl(id: number): string {
    return this.pokemonImageService.getPokeImageUrl(id);
  }

  errorImage(pokemon: Pokemon): void {
    pokemon.image = this.getImageUrl(pokemon.id);
  }
}
