import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-medication-details',
  templateUrl: './patient-medication-details.component.html',
  styleUrls: ['./patient-medication-details.component.css'],
})
export class PatientMedicationDetailsComponent implements OnInit {
  public medicationdetails = [];
  public showLoader = true;
  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatientMedicationDetails().then(patientMedicationOrders => {
      this.showLoader = false;
      if (patientMedicationOrders.data && patientMedicationOrders.data.entry) {
        patientMedicationOrders.data.entry.forEach(element => {
          this.medicationdetails.push({
            dosageInstruction:
              element.resource && element.resource.dosageInstruction
                ? element.resource.dosageInstruction[0].text || ''
                : '',
            name:
              element.resource && element.resource.medicationCodeableConcept
                ? element.resource.medicationCodeableConcept.text || ''
                : '',
          });
        });
      }
    });
  }
}
