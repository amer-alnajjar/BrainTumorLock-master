import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  data: any[] = [];

  constructor(private appointmentServices: AppointmentService) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.appointmentServices.getData().subscribe((res) => {
      this.data = res;
    });
  }
}
