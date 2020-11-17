import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonApisComponent } from './modules/pokemon/components/pokemon-apis/pokemon-apis.component';
import { PokemonDetailComponent } from './modules/pokemon/components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './modules/pokemon/components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: 'pokemon-api-list',
    component: PokemonApisComponent,
  },
  {
    path: 'pokemon',
    component: PokemonListComponent,
  },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  {
    path: '**',
    redirectTo: 'pokemon',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
