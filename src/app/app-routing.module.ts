import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonApisComponent } from './modules/pokemon/components/pokemon-apis/pokemon-apis.component';
import { PokemonCardComponent } from './modules/pokemon/components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './modules/pokemon/components/pokemon-detail/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: 'pokemon-api-list',
    component: PokemonApisComponent,
  },
  {
    path: 'pokemon',
    component: PokemonCardComponent,
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
