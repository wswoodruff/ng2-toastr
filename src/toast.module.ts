import {NgModule, ModuleWithProviders, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastContainer} from './toast-container.component';
import {ToastsManager} from './toast-manager';
import {ToastOptions} from './toast-options';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastContainer],
  exports: [ToastContainer],
  entryComponents: [ToastContainer]
})
export class ToastModule {
  static forRoot(config?: ToastOptions): ModuleWithProviders {
    let providers: Provider[] = [ToastsManager];

    if (config) {
      providers.push({provide: ToastOptions, useValue: config});
    }

    return {
      ngModule: ToastModule,
      providers: providers,
    };
  }
}