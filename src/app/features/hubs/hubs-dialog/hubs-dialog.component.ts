
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from "@angular/core";
import { FirebaseService } from "../../../core/services/firebase.service";
import { IHub } from '../../../core/signalr/hub.model';

@Component({
  templateUrl: "./hubs-dialog.component.html",
  styleUrls: ["./hubs-dialog.component.scss"],
})
export class HubsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HubsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHub,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {}
}
