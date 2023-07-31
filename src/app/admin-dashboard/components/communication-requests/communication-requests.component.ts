import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-communication-requests',
  templateUrl: './communication-requests.component.html',
  styleUrls: ['./communication-requests.component.css'],
})
export class CommunicationRequestsComponent implements OnInit {
  data: any[] = [];

  constructor(private contactServices: ContactService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.contactServices.getData().subscribe((res) => {
      this.data = res;
    });
  }
}
