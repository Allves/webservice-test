import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HubsComponent } from './hubs.component';

const routes: Routes = [{ path: '', component: HubsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HubsRoutingModule { }
