import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../../models/apis.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-apis',
  templateUrl: './pokemon-apis.component.html',
  styleUrls: ['./pokemon-apis.component.scss'],
})
export class PokemonApisComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  apis$: Observable<Api[]> = new Observable<Api[]>();
  ngOnInit(): void {
    this.apis$ = this.pokemonService.getApis();
  }
}
