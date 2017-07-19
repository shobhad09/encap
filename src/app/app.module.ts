import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmpComponent} from './employee/emp.comp';
@NgModule({
  declarations: [
    AppComponent,
    EmpComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmpComponent,AppComponent]
})
export class AppModule { }
