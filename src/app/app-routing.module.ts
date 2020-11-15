import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonApisComponent } from './modules/pokemon/components/pokemon-apis/pokemon-apis.component';
import { PokemonCardComponent } from './modules/pokemon/components/pokemon-card/pokemon-card.component';

const routes: Routes = [
  {
    path: 'pokemon-api-list',
    component: PokemonApisComponent,
  },
  {
    path: 'pokemons',
    component: PokemonCardComponent,
  },

  {
    path: '**',
    redirectTo: 'pokemons',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
