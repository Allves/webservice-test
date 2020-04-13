import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hubs-form',
  templateUrl: './hubs-form.component.html',
  styleUrls: ['./hubs-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HubsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
