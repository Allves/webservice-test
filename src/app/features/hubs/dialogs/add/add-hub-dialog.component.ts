import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { IHub } from '../../../../core/signalr/hub.model';
import { FirebaseService } from '../../../../core/services/firebase.service';

@Component({
  templateUrl: './add-hub-dialog.component.html',
  styleUrls: ['./add-hub-dialog.component.scss'],
})
export class AddHubDialogComponent {
  formGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddHubDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IHub,
    private firebaseService: FirebaseService
  ) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      url: [null, Validators.required],
      description: [null],
      active: [true, Validators.required],
      channels: this.formBuilder.array([this.createEvent()]),
      events: this.formBuilder.array([]),
    });
  }


  get channels(): FormArray {
    return this.formGroup.get("channels") as FormArray
  }

  createChannel() {
    return this.formBuilder.group({
      name: '',
    });
  }

  addChannel() {
    this.channels.push(this.createChannel());
  }

  deleteChannel(i: number) {
    this.channels.removeAt(i);

  }

  get events(): FormArray {
    return this.formGroup.get("events") as FormArray
  }

  createEvent() {
    return this.formBuilder.group({
      name: '',
    });
  }

  addEvent() {
    this.events.push(this.createEvent());
  }

  deleteEvent(i: number) {
    this.events.removeAt(i);

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
