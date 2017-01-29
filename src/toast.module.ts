import {NgModule, ModuleWithProviders} from '@angular/core';
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
  public static forRoot(config?: ToastOptions): ModuleWithProviders {
    let options = config || new ToastOptions({});

    return {
      ngModule: ToastModule,
      providers: [
        {provide: ToastOptions, useValue: options},
        // ToastsManager,
      ],
    };
  }
}