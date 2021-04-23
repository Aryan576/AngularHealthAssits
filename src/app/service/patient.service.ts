import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  Profilelist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}ListPatientprofile`).toPromise();
  }

  listpatient():Promise <any> {
    return this.http.get(`${environment.Base_URL}listPatient`).toPromise();
  }
  listcities():Promise <any> {
    return this.http.get(`${environment.Base_URL}listCities`).toPromise();
  }
  addpatient(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addAdminPatient`,model);
  }

  /* Patient Profile */

  getpatientByid(userid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getPatientprofile/${userid}`).toPromise();
  }
  getUserPatientByid(userid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getuserPatient/${userid}`).toPromise();
  }

  addPatientProfile(model :any):Observable<any> {
    return this.http.post(`${environment.Base_URL}patientprofile`,model);
  }
  listUserPatient(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_URL}listUserPatient/${userid}`).toPromise();
  }


  addFamilyMember(model :any):Observable<any> {
    return this.http.post(`${environment.Base_URL}patientprofile`,model);
  }
 

  getFamilyMember(patientid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getFamilyMember/${patientid}`).toPromise();
  }

  updateFamilyMember(model :any):Observable<any> {
    return this.http.put(`${environment.Base_URL}updateFamilyMember`,model);
  }

}
