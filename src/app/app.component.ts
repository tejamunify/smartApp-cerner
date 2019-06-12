import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public name: string;
  public dob: string;
  public gender: string;
  public medicationdetails = [];
  constructor() {}

  ngOnInit() {
    window['FHIR'].oauth2.ready(smart => {
      smart.patient.read().then(patient => {
        this.name =
          patient.name[0].given.join(' ') + ' ' + patient.name[0].family.join('') || '';
        this.dob = patient.birthDate || '';
        this.gender = patient.gender || '';
      });
      smart.patient.api.search({ type: 'MedicationOrder' }).then(results => {
        if (results.data && results.data.entry) {
          results.data.entry.forEach(element => {
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
    });
  }

  getDateOfBirth(date: string) {
    return new Date(date)
      .toDateString()
      .split(' ')
      .filter((element, index) => index !== 0)
      .join(' ');
  }

  getAge(date: string) {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
