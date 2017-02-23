import {ToastOptions} from 'ng2-toastr';
/**
 * Created by dereks on 2/23/17.
 */

export class ToastOption extends ToastOptions {
  constructor() {
    super();

    Object.assign({
      animate: 'flyRight',
      newestOnTop: false,
      showCloseButton: true,
    });
  }
}
