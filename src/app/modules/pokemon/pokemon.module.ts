import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonApisComponent } from './components/pokemon-apis/pokemon-apis.component';

@NgModule({
  declarations: [PokemonCardComponent, PokemonApisComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PokemonCardComponent, PokemonApisComponent],
})
export class PokemonModule {}
