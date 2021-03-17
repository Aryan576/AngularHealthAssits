import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  public doctorStatus:any= {1:"ACTIVE", 2:"PENDING" , 3:"DISABLE" , 4:"PAUSE" ,5:"KYC_DOCTOR"};
  constructor(private http:HttpClient) { }
  doctorlist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listDoctor`).toPromise();
  }

  adddoctor(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}doctorsignup`,model);
  }

  getdoctorByid(userid :any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getDoctorById/${userid}`).toPromise();
    }

    updatedoctor(model: any): Observable<any> {
      return this.http.put(`${environment.Base_URL}updatedoctorprofile`, model);
    }

    deletedoctor(userid:any):Observable<any>{
      return this.http.delete(`${environment.Base_URL}deletedoctor/${userid}`)
    }

    /* Doctorclinci */

      DoctorClinic(userid:any):Promise <any> {

        return this.http.get(`${environment.Base_URL}listDoctClinic/${userid}`).toPromise();

      }

      addDoctorclinic(model:any):Observable<any>{
        return this.http.post(`${environment.Base_URL}Doctor_Clinic`,model);
      }

      

      /* Clinci */

      
      clinic():Promise <any> {

        return this.http.get(`${environment.Base_URL}clinics`).toPromise();

      }



    
}
