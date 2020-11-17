import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../../models/apis.model';
import { PokemonApiService } from '../../services/pokemon-apis.service';

@Component({
  selector: 'app-pokemon-apis',
  templateUrl: './pokemon-apis.component.html',
  styleUrls: ['./pokemon-apis.component.scss'],
})
export class PokemonApisComponent implements OnInit {
  constructor(private pokemonApiService: PokemonApiService) {}
  apis$: Observable<Api[]> = new Observable<Api[]>();
  ngOnInit(): void {
    this.apis$ = this.pokemonApiService.getApis();
  }
}
