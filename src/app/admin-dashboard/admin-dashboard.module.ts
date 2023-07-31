import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CommunicationRequestsComponent } from './components/communication-requests/communication-requests.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    AdminComponent,
    CommunicationRequestsComponent,
  ],
  imports: [CommonModule, AdminDashboardRoutingModule, HttpClientModule],
})
export class AdminDashboardModule {}
