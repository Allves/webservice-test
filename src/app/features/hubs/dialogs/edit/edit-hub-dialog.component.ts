import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IHub } from 'src/app/core/signalr/hub.model';
import { FirebaseService } from '../../../../core/services/firebase.service';


@Component({
  templateUrl: './edit-hub-dialog.component.html',
  styleUrls: ['./edit-hub-dialog.component.scss'],
})
export class EditHubDialogComponent {
  formGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditHubDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IHub,
    private firebaseService: FirebaseService
  ) {
    this.formGroup = this.formBuilder.group({
      id: [this.data.id],
      name: [this.data.name, Validators.required],
      url: [this.data.url, Validators.required],
      description: [this.data.description],
      active: [this.data.active, Validators.required],
      channels: this.formBuilder.array([]),
      events: this.formBuilder.array([]),
    });


    this.populateChannels(this.data);
    this.populateEvents(this.data);
  }



  populateChannels(hub: IHub) {
    for (const channel of hub.channels) {
      this.addChannel(channel);
    }

  }

  populateEvents(hub: IHub) {
    for (const channel of hub.events) {
      this.addEvent(event);
    }
  }
  get channels(): FormArray {
    return this.formGroup.get("channels") as FormArray
  }

  createChannel(channel?) {
    return this.formBuilder.group({
      name: channel?.name || '',
    });
  }

  addChannel(channel?) {
    this.channels.push(this.createChannel(channel));
  }

  deleteChannel(i: number) {
    this.channels.removeAt(i);

  }

  get events(): FormArray {
    return this.formGroup.get("events") as FormArray
  }

  createEvent(event?) {
    return this.formBuilder.group({
      name: event?.name || '',
    });
  }

  addEvent(event?) {
    this.events.push(this.createEvent(event));
  }

  deleteEvent(i: number) {
    this.events.removeAt(i);

  }

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.firebaseService.updateHub(this.data.id, this.formGroup.value);
    this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
