import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable, Subscriber } from 'rxjs';
import { PokemonCard } from '../../models/pokemon-card.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonDescription = '';
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((res) => {
      res.map((pokemon) =>
        pokemon.subscribe((i) => {
          this.pokemons.push(i);
        })
      );
    });
  }

  getDescription(pokemon: Pokemon): void {
    this.pokemonService
      .getPokemonData(pokemon.species.url);
  }
}
