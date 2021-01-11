import { TypesEnum, Color } from '../../enums/color.enum';
import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, TemplateRef } from '@angular/core';

import { PokemonImageService } from '../../services/pokemon-image.service';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  typeEnum = TypesEnum;
  color = new Color();
  constructor(
    private pokemonImageService: PokemonImageService,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  getImageUrl(id: number): string {
    return this.pokemonImageService.getPokeImageUrl(id);
  }

  errorImage(pokemon: Pokemon): void {
    pokemon.image = this.getImageUrl(pokemon.id);
  }

  setPokemonCardColor(color1: string, color2: string): any {
    color1 = this.typeEnum[color1] ?? 'white';
    color2 = this.typeEnum[color2] ?? color1;
    const style = {
      'background-image': `linear-gradient(${color1}, ${color2})`,
    };
    return style;
  }
  setPokemonTypeColor(color: string): any {
    color = this.typeEnum[color] ?? 'white';
    const style = {
      background: color,
      'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    };
    return style;
  }
  redirectToDetails(pokemon: Pokemon) {
    this.pokemonService.setCurrentPokemon(pokemon);
    this.router.navigate(['', pokemon.id]);
  }
}
