import { Pokemon } from './../../models/pokemon.model';
import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  limiteInitial = 18;
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
  getPokemons(limit = this.limiteInitial, offset = this.offset): void {
    this.pokemonService.getPokemons(limit, offset).subscribe((res) => {
      res.map((pokemon) =>
        pokemon.subscribe((i) => {
          i.image = this.getImageUrl(i.id);
          this.pokemons.push(i);
          this.pokemons.sort(this.sortById);
        })
      );
    });
  }
  getMorePokemons(): void {
    this.offset = this.limiteInitial;
    this.limiteInitial += 10;
    this.getPokemons(this.limiteDefault, this.offset);
  }
  sortById(a: Pokemon, b: Pokemon): number {
    return a.id - b.id;
  }
}
