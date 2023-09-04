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
          '/admin/blogs',
          '/admin/add-blogs',
          '/admin/ubdate-blogs',
          '/admin/ubdate-blogs/12',
          '/admin/ubdate-blogs/13',
          '/admin/ubdate-blogs/14',
          '/admin/ubdate-blogs/15',
          '/admin/ubdate-blogs/16',
          '/admin/ubdate-blogs/17',
          '/admin/ubdate-blogs/18',
          '/admin/ubdate-blogs/19',
          '/admin/ubdate-blogs/20',
          '/admin/ubdate-blogs/21',
          '/admin/ubdate-blogs/22',
          '/admin/ubdate-blogs/23',
          '/admin/ubdate-blogs/24',
          '/admin/ubdate-blogs/25',
          '/admin/ubdate-blogs/26',
          '/admin/ubdate-blogs/27',
          '/admin/ubdate-blogs/28',
          '/admin/ubdate-blogs/29',
          '/admin/ubdate-blogs/30',
        ].includes(event.url);
      }
    });
  }
}
