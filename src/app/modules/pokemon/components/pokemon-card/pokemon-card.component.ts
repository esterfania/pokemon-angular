import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  pokemons$!: Observable<Pokemon[]>;
  limiteInitial = 1000;
  limiteDefault = 10;
  offset = 0;
  @ViewChild('modal') modalTemplateRef!: TemplateRef<any>;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.getPokemons();
  }

  getImageUrl(id: number): string {
    return this.pokemonService.getPokeImageUrl(id);
  }
  getPokemons(): void {
    this.pokemons$ = this.pokemonService.getPokemons().pipe(
      map((pokemons) =>
        pokemons.map((pokemon) => {
          pokemon.image = `assets/data/pokemon/${pokemon.id}.png`;
          return pokemon;
        })
      )
    );
  }

  errorImage(pokemon: Pokemon): void {
    pokemon.image = this.getImageUrl(pokemon.id);
  }
}
