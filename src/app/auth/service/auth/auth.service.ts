import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn: boolean = false;
  userData = 'userData';
  token = 'token';
  url = 'http://localhost/BrainTumorLock/login.php';
  //log in
  logIn(admin: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.url, admin, { headers });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
