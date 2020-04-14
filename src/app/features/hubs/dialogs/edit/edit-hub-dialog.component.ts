import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../../../core/services/firebase.service';

@Component({
  templateUrl: './edit-hub-dialog.component.html',
  styleUrls: ['./edit-hub-dialog.component.scss'],
})
export class EditHubDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<EditHubDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firebaseService: FirebaseService
  ) {}

  formControl = new FormControl('', [
    Validators.required,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.firebaseService.updateHub(this.data.id, this.data);
  }
}
