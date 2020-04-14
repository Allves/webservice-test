import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http/';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SignalrModule } from './signalr/signalr.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatToolbarModule,
    SignalrModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class CoreModule { }
