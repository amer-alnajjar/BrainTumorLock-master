import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/admin-dashboard/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  // get invalid inputs
  get errorName() {
    return this.contactForm.get('name');
  }
  get errorEmail() {
    return this.contactForm.get('email');
  }
  get erroSubject() {
    return this.contactForm.get('subject');
  }
  get errorMessage() {
    return this.contactForm.get('message');
  }

  setData() {
    if (this.contactForm.valid) {
      let model = this.contactForm.value;
      this.contactService.setData(model).subscribe(
        (res) => {
          this.contactForm.reset();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
