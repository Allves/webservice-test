import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { IHub } from '../../../../core/signalr/hub.model';
import { FirebaseService } from '../../../../core/services/firebase.service';

@Component({
  templateUrl: './add-hub-dialog.component.html',
  styleUrls: ['./add-hub-dialog.component.scss'],
})
export class AddHubDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AddHubDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHub,
    private firebaseService: FirebaseService
  ) {}

  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
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

  public confirmAdd(): void {
    this.firebaseService.createHub(this.data);
  }
}
