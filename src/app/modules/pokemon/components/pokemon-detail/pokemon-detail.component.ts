import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Color } from '../../enums/color.enum';

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
  pokemonDetails: Pokemon;
  color = new Color();
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    if (this.pokemonId) {
      this.pokemon$ = this.pokemonService.getPokemonWithId(this.pokemonId);
      this.pokemonDetails = this.pokemonService.getCurrentPokemon(
        Number(this.pokemonId)
      );
    }
  }
}
