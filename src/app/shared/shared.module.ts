import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ModalComponent,
    SearchComponent,
    SearchComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ModalComponent, SearchComponent],
})
export class SharedModule {}
