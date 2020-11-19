import { ComponentRef, TemplateRef } from '@angular/core';
import { ModalComponent } from './../modal.component';

export interface ModalConfig {
  templateRef: TemplateRef<ModalComponent>;
  componentRef: ComponentRef<ModalComponent>;
}
