import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { ContextService } from './context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    public patientService: PatientService,
    public contextService: ContextService
  ) {}

  ngOnInit() {}
}
