import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
  // get invalid inputs
  get errorEmail() {
    return this.loginForm.get('email');
  }
  get errorPassword() {
    return this.loginForm.get('password');
  }

  login() {
    let admin = this.loginForm.value;
    this.authService.logIn(admin).subscribe(
      (res) => {
        this.router.navigate(['../admin']);
        this.authService.isLoggedIn = true;
      },
      (err) => {
        console.error('API Error:', err);
        // Handle any API errors here
      }
    );
  }
}
