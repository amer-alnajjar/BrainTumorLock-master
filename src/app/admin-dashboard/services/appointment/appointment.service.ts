import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  url = 'http://localhost/BrainTumorLock/appointment.php';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.url);
  }

  setData(model: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<any>(this.url, model, { headers });
  }
}
