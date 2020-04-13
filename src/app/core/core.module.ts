import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignalrModule } from './signalr/signalr.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    SignalrModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class CoreModule { }
