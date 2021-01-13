import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterByName } from './pipe/filter-by-name';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PokemonRoutingModule } from './pokemon-routing.module';
@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonDetailComponent,
    PokemonListComponent,
    FilterByName,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    PokemonRoutingModule,
  ],
})
export class PokemonModule {}
