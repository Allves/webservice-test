import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hubs-list',
  templateUrl: './hubs-list.component.html',
  styleUrls: ['./hubs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HubsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
