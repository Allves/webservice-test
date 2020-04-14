import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from '../../../../core/services/firebase.service';
import { IHub } from '../../../../core/signalr/hub.model';


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
      methods: this.formBuilder.array([this.createStream()]),
      streams: this.formBuilder.array([]),
    });
  }


  get methods(): FormArray {
    return this.formGroup.get("methods") as FormArray
  }

  createChannel() {
    return this.formBuilder.group({
      name: '',
    });
  }

  addChannel() {
    this.methods.push(this.createChannel());
  }

  deleteChannel(i: number) {
    this.methods.removeAt(i);

  }

  get streams(): FormArray {
    return this.formGroup.get("streams") as FormArray
  }

  createStream() {
    return this.formBuilder.group({
      name: '',
    });
  }

  addStream() {
    this.streams.push(this.createStream());
  }

  deleteStream(i: number) {
    this.streams.removeAt(i);

  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.firebaseService.createHub(this.formGroup.value);
    this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
