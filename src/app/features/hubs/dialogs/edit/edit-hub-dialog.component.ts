import { Component, Inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IHub } from "src/app/core/signalr/hub.model";
import { FirebaseService } from "../../../../core/services/firebase.service";

@Component({
  templateUrl: "./edit-hub-dialog.component.html",
  styleUrls: ["./edit-hub-dialog.component.scss"],
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
      methods: this.formBuilder.array([]),
      streams: this.formBuilder.array([]),
    });

    this.populateMethods(this.data);
    this.populateStreams(this.data);
  }

  populateMethods(hub: IHub) {
    if (hub.methods && hub.methods.length >= 1) {
      for (const method of hub.methods) {
        this.addMethod(method);
      }
    }
  }

  populateStreams(hub: IHub) {
    if (hub.streams && hub.streams.length >= 1) {
      for (const stream of hub.streams) {
        this.addStream(stream);
      }
    }
  }

  get methods(): FormArray {
    return this.formGroup.get("methods") as FormArray;
  }

  createMethods(method?) {
    return this.formBuilder.group({
      name: method?.name || "",
    });
  }

  addMethod(method?) {
    this.methods.push(this.createMethods(method));
  }

  deleteMethods(i: number) {
    this.methods.removeAt(i);
  }

  get streams(): FormArray {
    return this.formGroup.get("streams") as FormArray;
  }

  createStreams(stream?) {
    return this.formBuilder.group({
      name: stream?.name || "",
    });
  }

  addStream(stream?) {
    this.streams.push(this.createStreams(stream));
  }

  deleteStream(i: number) {
    this.streams.removeAt(i);
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
