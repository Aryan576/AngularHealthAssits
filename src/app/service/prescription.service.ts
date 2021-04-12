import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http : HttpClient) { }

  listAppointmentForDoctor(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_URL}listAppointmentForDoctor/${userid}`).toPromise();
  }

  addPrescription(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addPrescription`,model);
  }

  addPrescriptioneMedicine(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addPrescriptionMedicine`,model);
  }

  getAppointmentByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getappointmentid/${appointmentid}`).toPromise();
  }

  listMedicine():Promise<any> {
    return this.http.get(`${environment.Base_URL}listMedicine`).toPromise();
  }

  listDisease():Promise<any> {
    return this.http.get(`${environment.Base_URL}listDisease`).toPromise();
  }

  getPrescriptionMedicineByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getappointmentid/${appointmentid}`).toPromise();
  }

  addAppointmentDisease(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addAppointmentDisease`,model);
  }

  listAppointmentDisease(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}listAppointmentDisease/${appointmentid}`).toPromise();
  }

  listDiet():Promise <any> {
    return this.http.get(`${environment.Base_URL}listDiet`).toPromise();
  }

  listDietUser(patientid : any):Promise <any> {
    return this.http.get(`${environment.Base_URL}listDietUser/${patientid}`).toPromise();
  }

  addDietuser(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addDietUser`,model);
  }
}
