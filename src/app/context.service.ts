import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {
  public smart = null;

  createContext() {
    return new Promise((resolve, reject) => {
      window.FHIR.oauth2.ready(smart => {
        this.smart = smart;
        resolve(true);
      });
    });
  }

  getContext() {
    return this.smart;
  }
}
