/**
 * Created by dereks on 8/24/16.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import {CustomOption} from './custom-option';

@NgModule({
  imports: [BrowserModule,
    ToastModule.forRoot(),
  ],
  providers: [{
    provide: ToastOptions,
    useClass: CustomOption,
  }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}
