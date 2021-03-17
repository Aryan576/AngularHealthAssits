import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private http:HttpClient) { }
  cliniclist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}clinics`).toPromise();
  }

  addclinic(model:any) :Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addclinic`,model);
  }
  getclinicByid(clinicid :any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getclinicById/${clinicid}`).toPromise();
    }
    updateclinic(model: any): Observable<any> {
      return this.http.put(`${environment.Base_URL}updateClinic`, model);
    }

    deleteclinic(clinicid:any):Observable<any>{
      return this.http.delete(`${environment.Base_URL}deleteClinic/${clinicid}`)
    }
 

 

}
