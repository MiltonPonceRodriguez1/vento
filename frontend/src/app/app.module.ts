import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports de las rutas
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { MotorcycleNewComponent } from './components/motorcycle-new/motorcycle-new.component';
import { MotorcycleUpdateComponent } from './components/motorcycle-update/motorcycle-update.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleNewComponent,
    MotorcycleUpdateComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
