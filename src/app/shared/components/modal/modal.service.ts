import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { BodyInjectorService } from '../services/body-injector.service';
import { ModalComponent } from './modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private componentRef!: ComponentRef<ModalComponent>;
  private componentFactory: ComponentFactory<ModalComponent>;
  constructor(
    cfr: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory = cfr.resolveComponentFactory(ModalComponent);
  }

  open(config: TemplateRef<ModalComponent>): void {
    this.componentRef = this.createComponentRef();
    this.componentRef.instance.config = {
      templateRef: config,
      componentRef: this.componentRef,
    };
    this.bodyInjector.stackBeforeAppRoot(this.componentRef);
  }
  close(): void {
    this.componentRef.destroy();
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
