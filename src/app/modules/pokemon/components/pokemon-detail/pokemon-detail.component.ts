import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { capitalize } from 'src/app/shared/helpers/capitalize';
import { Color } from '../../../../shared/enums/color.enum';

import { Pokemon } from '../../../../shared/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { fade } from '../../../../shared/animations/fade';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  animations: [fade],
})
export class PokemonDetailComponent implements OnInit {
  pokemonId!: number;
  pokemon$!: Observable<Pokemon>;
  pokemonDetails: Pokemon;
  color = new Color();
  data: any[] = [];
  options: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    if (this.pokemonId) {
      this.pokemon$ = this.pokemonService
        .getPokemonWithId(this.pokemonId)
        .pipe(tap((r) => this.getStats(r)));
      this.pokemonDetails = this.pokemonService.getCurrentPokemon(
        Number(this.pokemonId)
      );
    }
  }

  private getStats(item): void {
    this.setOptions(
      item.stats.map((i) => {
        return {
          value: i.base_stat,
          name: i.stat.name === 'hp' ? 'HP' : capitalize(i.stat.name),
        };
      })
    );
  }

  private setOptions(data): void {
    this.options = {
      width: '100%',
      color: ['#FF5959', '#F5AC78', '#FAE078', '#9DB7F5', '#A7DB8D', '#FA92B2'],
      title: {
        text: 'STATS',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: [
          'HP',
          'Attack',
          'Defense',
          'Special-attack',
          'Special-defense',
          'Speed',
        ],
      },
      calculable: true,
      label: {
        color: '#000',
      },
      series: [
        {
          name: 'stat',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data,
        },
      ],
    };
  }
}
