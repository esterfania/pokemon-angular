import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonId!: number;
  pokemon$!: Observable<Pokemon>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    if (this.pokemonId) {
      this.pokemon$ = this.pokemonService.getPokemonWithID(this.pokemonId).pipe(
        map((pokemon) => {
          pokemon.image = this.getImageUrl(pokemon.id);
          return pokemon;
        })
      );
    }
  }
  getImageUrl(id: number): string {
    return this.pokemonService.getPokeImageUrl(id);
  }

  errorImage(pokemon: Pokemon): void {
    pokemon.image = this.pokemonService.getPokedexImageUrl(pokemon.id);
  }
}
