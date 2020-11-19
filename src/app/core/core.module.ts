import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../shared/components/loading/loading.module';

@NgModule({
  imports: [CommonModule, RouterModule, LoadingModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
