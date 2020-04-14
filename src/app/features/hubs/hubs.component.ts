import { MatSort } from '@angular/material/sort';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IHub } from 'src/app/core/signalr/hub.model';
import { FirebaseService } from '../../core/services/firebase.service';
import { EditHubDialogComponent } from './dialogs/edit/edit-hub-dialog.component';
import { ConnectionService } from '../../core/signalr/connection/connection.service';
import { AddHubDialogComponent } from './dialogs/add/add-hub-dialog.component';



@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.scss']
})
export class HubsComponent implements AfterViewInit {

  displayedColumns = ['name', 'url', 'active', 'connect', 'disconnect', 'edit'];
  dataSource: MatTableDataSource<any>;
  public hubConnected = {
    connected: false,
    name: ''
  };

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private firebaseService: FirebaseService,
    private connectionService: ConnectionService,
    public dialog: MatDialog
  ) { }

  ngAfterViewInit(): void {
    this.firebaseService.getHubs().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  editHub(data): void {
      const dialogRef = this.dialog.open(EditHubDialogComponent, {
        width: '350px',
        data
      });
  }

  connectHub(hub: IHub) {
    this.hubConnected = {
      connected: true,
      name: hub.name
    };
    this.connectionService.createConnection(hub.name);
  }

  disconnectHub(hub: IHub) {
    this.hubConnected = {
      connected: false,
      name: ''
    };
    this.connectionService.stopConnection(hub.name);
  }

  addHub(): void {
    const dialogRef = this.dialog.open(AddHubDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((response => console.log(response)));
  }

}
