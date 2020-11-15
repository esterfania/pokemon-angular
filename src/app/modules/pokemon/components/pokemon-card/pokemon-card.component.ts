import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { pluck } from 'rxjs/operators';
import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalService } from '../../../../shared/modal/modal.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemon!: Pokemon;
  pokemonDescription = '';
  @ViewChild('modal') modalTemplateRef!: TemplateRef<any>;
  constructor(
    private pokemonService: PokemonService,
    private modalService: ModalService
  ) {}
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
    this.selectedPokemon = pokemon;
    this.pokemonService
      .getPokemonData(pokemon.species.url)
      .pipe(pluck('flavor_text_entries'))
      .subscribe((res) => {
        this.pokemonDescription = res[1]?.flavor_text;
        this.modalService.open(this.modalTemplateRef);
      });
  }
}
