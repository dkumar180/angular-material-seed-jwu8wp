import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { StateModule } from './state/state.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    PagesModule,
    StateModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents(null)
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
