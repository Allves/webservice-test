import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from '../../../../core/services/firebase.service';

@Component({
  templateUrl: './delete-hub-dialog.component.html',
  styleUrls: ['./delete-hub-dialog.component.scss'],
})
export class DeleteHubDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteHubDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firebaseService: FirebaseService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.firebaseService.deleteHub(this.data.id);
  }
}
