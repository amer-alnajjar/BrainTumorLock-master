import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AdminComponent } from './components/admin/admin.component';
import { CommunicationRequestsComponent } from './components/communication-requests/communication-requests.component';
import { BlogsComponent } from './components/blogs/list-blogs/blogs.component';
import { AddBlogsComponent } from './components/blogs/add-blogs/add-blogs.component';
import { UbdateBlogsComponent } from './components/blogs/ubdate-blogs/ubdate-blogs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: '',
    component: DashboardComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'appointment', component: AppointmentComponent },
  {
    path: 'communication-requests',
    component: CommunicationRequestsComponent,
  },
   {
    path: 'blogs',
    component: BlogsComponent,
  },
    {
    path: 'add-blogs',
    component: AddBlogsComponent,
  },
      {
    path: 'ubdate-blogs/:id',
    component: UbdateBlogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
