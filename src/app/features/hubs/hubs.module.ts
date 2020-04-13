import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubsRoutingModule } from './hubs-routing.module';
import { HubsComponent } from './hubs.component';
import { HubsListComponent } from './hubs-list/hubs-list.component';
import { HubsFormComponent } from './hubs-form/hubs-form.component';


@NgModule({
  declarations: [HubsComponent, HubsListComponent, HubsFormComponent],
  imports: [
    CommonModule,
    HubsRoutingModule
  ]
})
export class HubsModule { }
