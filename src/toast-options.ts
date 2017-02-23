import {Injectable} from '@angular/core';

@Injectable()
export class ToastOptions {
  positionClass: string = 'toast-top-right';
  maxShown: number = 5;
  newestOnTop: boolean = false;
  animate: string = 'fade';

  // override-able properties
  toastLife: number = 5000;
  enableHTML: boolean = false;
  dismiss: 'auto' | 'click' | 'controlled' = 'auto';
  messageClass: string = 'toast-message';
  titleClass: string = 'toast-title';
  showCloseButton: boolean = false;

  set(options: any) {
    Object.assign(this, options);
  }
}
