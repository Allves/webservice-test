import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";

import { AddHubDialogComponent } from "./dialogs/add/add-hub-dialog.component";
import { DeleteHubDialogComponent } from "./dialogs/delete/delete-hub-dialog.component";
import { EditHubDialogComponent } from "./dialogs/edit/edit-hub-dialog.component";
import { HubsRoutingModule } from "./hubs-routing.module";
import { HubsComponent } from "./hubs.component";
import { SharedModule } from '../../shared/shared.module';
import { HubsHttpTestComponent } from './hubs-http-test/hubs-http-test.component';

const DIALOGS_MODULES = [
  AddHubDialogComponent,
  EditHubDialogComponent,
  DeleteHubDialogComponent,
];

@NgModule({
  declarations: [HubsComponent, ...DIALOGS_MODULES, HubsHttpTestComponent],
  imports: [
    CommonModule,
    SharedModule,
    HubsRoutingModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
  ],
  entryComponents: [...DIALOGS_MODULES],
})
export class HubsModule {}
