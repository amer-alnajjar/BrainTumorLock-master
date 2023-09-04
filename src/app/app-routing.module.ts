import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/components/home/home.component';
import { AboutComponent } from './layout/components/about/about.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { LatestResearchComponent } from './layout/components/latest-research/latest-research.component';
import { MedicationsComponent } from './layout/components/medications/medications.component';
import { TumorExaminationComponent } from './layout/components/tumor-examination/tumor-examination.component';
import { MotivationalStoriesComponent } from './layout/components/motivational-stories/motivational-stories.component';
import { MedicalGuideComponent } from './layout/components/medical-guide/medical-guide.component';
import { DashboardComponent } from './admin-dashboard/components/dashboard/dashboard.component';
import { AppointmentComponent } from './admin-dashboard/components/appointment/appointment.component';
import { AdminComponent } from './admin-dashboard/components/admin/admin.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthenticationGuard } from './auth/guard/authentication.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Articles and research', component: LatestResearchComponent },
  { path: 'medications', component: MedicationsComponent },
  { path: 'tumor-examination', component: TumorExaminationComponent },
  { path: 'motivational-stories', component: MotivationalStoriesComponent },
  { path: 'medical-guide', component: MedicalGuideComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin-dashboard/admin-dashboard.module').then(
            (m) => m.AdminDashboardModule
          ),
      },
    ],
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'auth',
    component: LoginComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
