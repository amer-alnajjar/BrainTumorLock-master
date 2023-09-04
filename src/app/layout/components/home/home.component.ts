import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/admin-dashboard/services/appointment/appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appointmentServices: AppointmentService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.appointmentForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      date: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
    localStorage.setItem('isLoggedIn', 'false');
  }

  // get invalid inputs
  get errorName() {
    return this.appointmentForm.get('name');
  }
  get errorEmail() {
    return this.appointmentForm.get('email');
  }
  get errorPhone() {
    return this.appointmentForm.get('phone');
  }
  get errorDate() {
    return this.appointmentForm.get('date');
  }
  get errorcountry() {
    return this.appointmentForm.get('country');
  }
  get errorcity() {
    return this.appointmentForm.get('city');
  }

  get errorMessage() {
    return this.appointmentForm.get('message');
  }

  setData() {
    if (this.appointmentForm.valid) {
      let model = this.appointmentForm.value;
      this.appointmentServices.setData(model).subscribe(
        (res) => {
          this.appointmentForm.reset();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.appointmentForm.markAllAsTouched();
    }
  }
}
