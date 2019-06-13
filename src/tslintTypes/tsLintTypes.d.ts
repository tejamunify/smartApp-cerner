import { FHIRModel } from '../assets/models/FHIR.model';
export {};
declare global {
  interface Window {
    FHIR: FHIRModel;
  }
}
