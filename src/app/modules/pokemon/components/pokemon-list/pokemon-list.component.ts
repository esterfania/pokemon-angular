import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonImageService } from '../../services/pokemon-image.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons$!: Observable<Pokemon[]>;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons(): void {
    this.pokemons$ = this.pokemonService
      .getPokemons()
      .pipe(
        map((pokemons) =>
          pokemons.map((pokemon) => {
            pokemon.image = `assets/data/pokemon/${pokemon.id}.png`;
            return pokemon;
          })
        )
      )
      .pipe(tap((res) => console.log(res)));
  }
}
