import { Component, HostBinding, HostListener } from '@angular/core';

import { ModalConfig } from './intefaces/moda-config.model';
@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  config!: ModalConfig;
  @HostListener('click', ['$event']) click(el: any): void {
    if (el.target.className.includes('modal-body')) {
      this.close();
    }
  }
  close(): void {
    this.config.componentRef.destroy();
  }
}
