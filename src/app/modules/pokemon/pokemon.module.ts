import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PokemonRoutingModule } from './pokemon-routing.module';
@NgModule({
  declarations: [
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    PokemonRoutingModule,
  ],
})
export class PokemonModule {}
