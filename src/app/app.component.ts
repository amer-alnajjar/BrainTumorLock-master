import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BrainTumorLock';

  showHeader: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and set the showHeader variable accordingly
        this.showHeader = ![
          '/admin',
          '/admin/dashboard',
          '/admin/appointment',
          '/admin/communication-requests',
          '/auth',
          '/auth/login',
        ].includes(event.url);
      }
    });
  }
}
