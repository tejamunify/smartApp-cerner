import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material';
import { ContextService } from './context.service';
import { PatientService } from './patient.service';
import { HeaderComponent } from './header/header.component';
import { PatientMedicationDetailsComponent } from './patient-medication-details/patient-medication-details.component';
import { contextFactory } from './context.factory';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PatientMedicationDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule],
  providers: [
    ContextService,
    {
      provide: APP_INITIALIZER,
      useFactory: contextFactory,
      deps: [ContextService],
      multi: true,
    },
    PatientService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
