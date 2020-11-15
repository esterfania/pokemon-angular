import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BodyInjectorService {
  constructor(private appRef: ApplicationRef) {}

  stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const domElement = this.createDomElement(componentRef);
    const appRoot = document.querySelector('app-root');
    document.body.insertBefore(domElement, appRoot);
  }

  private createDomElement(componentRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    return domElement;
  }
}
