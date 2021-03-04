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
 

 

}
