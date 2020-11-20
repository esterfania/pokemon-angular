import { ColorsEnum } from '../../enums/color.enum';
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
  colorsEnum = ColorsEnum;
  constructor(private pokemonImageService: PokemonImageService) {}

  getImageUrl(id: number): string {
    return this.pokemonImageService.getPokeImageUrl(id);
  }

  errorImage(pokemon: Pokemon): void {
    pokemon.image = this.getImageUrl(pokemon.id);
  }

  setPokemonCardColor(color1: string, color2: string): any {
    color1 = this.colorsEnum[color1] ?? 'white';
    color2 = this.colorsEnum[color2] ?? color1;
    const style = {
      'background-image': `linear-gradient(${color1}, ${color2})`,
    };
    return style;
  }
  setPokemonTypeColor(color: string): any {
    color = this.colorsEnum[color] ?? 'white';
    const style = {
      background: color,
      'box-shadow': `0 0 20px rgba(255, 255, 255, 0.822)`,
    };
    return style;
  }
}
