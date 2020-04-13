import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class CoreModule { }
