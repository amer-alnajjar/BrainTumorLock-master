import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/components/home/home.component';
import { AboutComponent } from './layout/components/about/about.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LatestResearchComponent } from './layout/components/latest-research/latest-research.component';
import { MedicationsComponent } from './layout/components/medications/medications.component';
import { TumorExaminationComponent } from './layout/components/tumor-examination/tumor-examination.component';
import { MotivationalStoriesComponent } from './layout/components/motivational-stories/motivational-stories.component';
import { MedicalGuideComponent } from './layout/components/medical-guide/medical-guide.component';
import { RouterModule } from '@angular/router';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    LatestResearchComponent,
    MedicationsComponent,
    TumorExaminationComponent,
    MotivationalStoriesComponent,
    MedicalGuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdminDashboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
