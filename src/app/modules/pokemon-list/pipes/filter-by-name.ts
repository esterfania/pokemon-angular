import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../../shared/models/pokemon.model';

@Pipe({
  name: 'filterByName',
})
export class FilterByName implements PipeTransform {
  transform(pokemons: Pokemon[], name: string): Pokemon[] {
    name = name.trim().toLowerCase();

    if (name) {
      return pokemons.filter((o) => o.name.toLowerCase().includes(name));
    } else {
      return pokemons;
    }
  }
}
