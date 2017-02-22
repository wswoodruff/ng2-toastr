import {Injectable, Optional} from '@angular/core';

@Injectable()
export class ToastOptions {
  positionClass?: string;
  maxShown?: number;
  newestOnTop?: boolean = false;
  animate?: string = 'fade';

  // override-able properties
  toastLife?: number;
  enableHTML?: boolean = false;
  dismiss?: 'auto' | 'click' | 'controlled';
  messageClass?: string;
  titleClass?: string;
  showCloseButton?: boolean = false;

  constructor(@Optional() options: Object) {
    if (!options) {
      options = {};
    }

    Object.assign(this, options);
  }
}
