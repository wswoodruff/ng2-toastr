import {ToastOptions} from 'ng2-toastr';
import {Injectable} from '@angular/core';

@Injectable()
export class ToastOption extends ToastOptions {
  animate: string = 'flyRight';
  newestOnTop: boolean = false;
  showCloseButton: boolean = true;
}

