import { Injectable } from '@angular/core';
import { ContextService } from './context.service';

@Injectable()
export class PatientService {
  public smart;
  constructor(public contextService: ContextService) {
    this.smart = this.contextService.getContext();
  }
  getPatientDemographics() {
    return this.smart.patient.read();
  }

  getPatientMedicationDetails() {
    return this.smart.patient.api.search({ type: 'MedicationOrder' });
  }
}
