import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ToastModule, ToastOptions} from 'ng2-toastr';

let config: any = {
  animate: 'flyRight',
  newestOnTop: false,
  showCloseButton: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
