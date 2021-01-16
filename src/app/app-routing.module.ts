import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pokemon-list/pokemon-list.module').then(
        (c) => c.PokemonListModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then((c) => c.PokemonModule),
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
