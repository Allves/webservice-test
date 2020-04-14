import { MatSort } from '@angular/material/sort';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IHub } from 'src/app/core/signalr/hub.model';
import { FirebaseService } from '../../core/services/firebase.service';
import { EditHubDialogComponent } from './dialogs/edit/edit-hub-dialog.component';
import { ConnectionService } from '../../core/signalr/connection/connection.service';



@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.scss']
})
export class HubsComponent implements AfterViewInit {

  displayedColumns = ['id', 'name', 'url', 'active', 'connect', 'edit'];
  dataSource: MatTableDataSource<any>;

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

  openDialog(data): void {
      const dialogRef = this.dialog.open(EditHubDialogComponent, {
        width: '350px',
        data
      });
  }

  connectHub(hub: IHub) {
    this.connectionService.createConnection(hub.url);

  }

  addHub(): void {
    this.connectionService.stopConnection();
  };

}
