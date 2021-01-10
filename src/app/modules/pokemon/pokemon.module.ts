import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonApisComponent } from './components/pokemon-apis/pokemon-apis.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterByName } from './pipe/filter-by-name';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonApisComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    FilterByName,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  exports: [PokemonListComponent, PokemonApisComponent, PokemonDetailComponent],
})
export class PokemonModule {}
