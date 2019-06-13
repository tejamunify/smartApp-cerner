import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public name: string;
  public dob: string;
  public gender: string;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatientDemographics().then(patientDemographics => {
      this.name =
        patientDemographics.name[0].given.join(' ') +
          ' ' +
          patientDemographics.name[0].family.join('') || '';
      this.dob = patientDemographics.birthDate || '';
      this.gender = patientDemographics.gender || '';
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
