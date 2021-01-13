import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent],
})
export class SharedModule {}
