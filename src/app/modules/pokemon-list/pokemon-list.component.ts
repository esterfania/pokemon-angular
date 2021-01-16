import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Pokemon } from '../../shared/models/pokemon.model';
import { PokemonService } from '../pokemon/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons!: Pokemon[];
  filter = '';
  subscription = new Subscription();
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getPokemons(): void {
    this.subscription = this.pokemonService
      .getPokemons()
      .subscribe((res) => (this.pokemons = res));
  }
  setFilterValue(event: any): void {
    this.filter = event as string;
  }
}
