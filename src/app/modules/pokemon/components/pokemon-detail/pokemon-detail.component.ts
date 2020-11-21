import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonImageService } from '../../services/pokemon-image.service';
import { tap } from 'rxjs/operators';

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
      this.pokemon$ = this.pokemonService.getPokemonWithId(this.pokemonId);
    }
  }
}
