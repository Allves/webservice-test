import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../core/services/api.service';

@Component({
  selector: 'app-hubs-http-test',
  templateUrl: './hubs-http-test.component.html',
  styleUrls: ['./hubs-http-test.component.scss']
})
export class HubsHttpTestComponent implements OnInit {


  data = {
    url: '',
    payload: ''
  };

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }

  enviar() {
    const object = JSON.parse(this.data.payload);
    this.apiService.post(this.data.url, object).subscribe((response => {
      console.log('POST RESPONSE');
      console.log(response)
    }));
  }

}
