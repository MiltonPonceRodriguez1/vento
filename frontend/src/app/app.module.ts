import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MotorcycleNewComponent } from './components/motorcycle-new/motorcycle-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
