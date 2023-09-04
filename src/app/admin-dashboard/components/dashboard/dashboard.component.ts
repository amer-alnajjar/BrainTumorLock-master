import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { ContactService } from '../../services/contact/contact.service';
import { AppointmentService } from '../../services/appointment/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  blogs!: any[];
  contacts!: any[];
  appointment!: any[];
  constructor(
    private blogService: BlogService,
    private contactServices: ContactService,
    private appointmentServices: AppointmentService
  ) {}

  ngOnInit(): void {
    this.getAllblogs();
    this.getAllContact();
    this.getAllAppointment();
  }

  getAllblogs() {
    this.blogService.getData().subscribe((res: any) => (this.blogs = res));
  }
  getAllContact() {
    this.contactServices.getData().subscribe((res) => {
      this.contacts = res;
    });
  }
  getAllAppointment() {
    this.appointmentServices.getData().subscribe((res) => {
      this.appointment = res;
    });
  }
}
