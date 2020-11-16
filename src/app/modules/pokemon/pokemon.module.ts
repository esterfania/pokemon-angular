import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonApisComponent } from './components/pokemon-apis/pokemon-apis.component';
import { SharedModule } from '../../shared/shared.module';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonApisComponent,
    PokemonDetailComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  exports: [PokemonCardComponent, PokemonApisComponent, PokemonDetailComponent],
})
export class PokemonModule {}
