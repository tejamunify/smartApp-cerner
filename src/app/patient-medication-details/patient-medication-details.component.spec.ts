import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicationDetailsComponent } from './patient-medication-details.component';

describe('PatientMedicationDetailsComponent', () => {
  let component: PatientMedicationDetailsComponent;
  let fixture: ComponentFixture<PatientMedicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
