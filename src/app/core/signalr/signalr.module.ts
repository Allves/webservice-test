import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionComponent } from './connection/connection.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ConnectionComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SignalrModule { }
