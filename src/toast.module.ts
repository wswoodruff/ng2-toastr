import {NgModule, ModuleWithProviders, ApplicationRef, ComponentFactoryResolver} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastContainer} from './toast-container.component';
import {ToastsManager} from './toast-manager';
import {ToastOptions} from './toast-options';

export function toastsManagerFactory(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, options: ToastOptions) {
  return new ToastsManager(componentFactoryResolver, appRef, options);
}


@NgModule({
  imports: [CommonModule],
  declarations: [ToastContainer],
  exports: [ToastContainer],
  entryComponents: [ToastContainer]
})
export class ToastModule {
  public static forRoot(config: ToastOptions): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: [
        {provide: ToastOptions, useValue: config},
        {provide: ToastsManager, useFactory: toastsManagerFactory, deps: [ComponentFactoryResolver, ApplicationRef, ToastOptions]},
      ],
    };
  }
}