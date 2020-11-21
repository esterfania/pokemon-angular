import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonApisComponent } from './modules/pokemon/components/pokemon-apis/pokemon-apis.component';
import { PokemonDetailComponent } from './modules/pokemon/components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './modules/pokemon/components/pokemon-list/pokemon-list.component';
import { Pokemon } from './modules/pokemon/models/pokemon.model';

const routes: Routes = [
  {
    path: 'pokemon-api-list',
    component: PokemonApisComponent,
  },
  { path: ':id', component: PokemonDetailComponent },
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
