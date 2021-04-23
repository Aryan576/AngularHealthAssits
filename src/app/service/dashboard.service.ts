import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  listdoctor():Promise<any> {
    return this.http.get(`${environment.Base_URL}listDoctor`).toPromise();
  }

 listpathology():Promise <any> {
    return this.http.get(`${environment.Base_URL}listPathology`).toPromise();
  }

  listpharmacy():Promise <any> {
    return this.http.get(`${environment.Base_URL}listPharmacy`).toPromise();
  }

listpatient():Promise <any> {
    return this.http.get(`${environment.Base_URL}ListPatientprofile`).toPromise();
  }

listClinic():Promise <any> {
    return this.http.get(`${environment.Base_URL}clinics`).toPromise();
  }

 kycDoctor():Promise<any> {
    return this.http.get(`${environment.Base_URL}kycDoctor`).toPromise();
  }
  activeDoctor():Promise<any> {
    return this.http.get(`${environment.Base_URL}activeDoctor`).toPromise();
  }
  pendingDoctor():Promise<any> {
    return this.http.get(`${environment.Base_URL}pendingDoctor`).toPromise();
  }
  pauseDoctor():Promise<any> {
    return this.http.get(`${environment.Base_URL}pauseDoctor`).toPromise();
  }

  doneAppointmentForAllDoctor():Promise<any> {
    return this.http.get(`${environment.Base_URL}doneAppointmentForAllDoctor`).toPromise();
  }
}
