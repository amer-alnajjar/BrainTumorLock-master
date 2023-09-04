import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CommunicationRequestsComponent } from './components/communication-requests/communication-requests.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './components/blogs/list-blogs/blogs.component';
import { AddBlogsComponent } from './components/blogs/add-blogs/add-blogs.component';
import { UbdateBlogsComponent } from './components/blogs/ubdate-blogs/ubdate-blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    AdminComponent,
    CommunicationRequestsComponent,
    BlogsComponent,
    AddBlogsComponent,
    UbdateBlogsComponent,
  ],
  imports: [CommonModule, AdminDashboardRoutingModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,],
})
export class AdminDashboardModule {}
