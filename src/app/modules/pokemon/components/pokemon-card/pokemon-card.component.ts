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
  limite = 30;
  offset = 0;
  @ViewChild('modal') modalTemplateRef!: TemplateRef<any>;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.getPokemons();
  }

  getImageUrl(id: number): string {
    return this.pokemonService.getPokeImageUrl(id);
  }
  getPokemons(limit = this.limite, offset = this.offset): void {
    this.pokemonService.getPokemons(limit, offset).subscribe((res) => {
      res.map((pokemon) =>
        pokemon.subscribe((i) => {
          this.pokemons.push(i);
        })
      );
    });
  }
  getMorePokemons(): void {
    this.offset = this.limite;
    this.limite += 10;
    this.getPokemons(this.limite, this.offset);
  }
}
