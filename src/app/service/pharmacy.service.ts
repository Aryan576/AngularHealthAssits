import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  constructor(private http:HttpClient,private userData:UserserviceService,private rut:Router) { }

  pharmacylist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listpharmacy`).toPromise()
  }
  addpharmacy(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addpharmacy`,model);
  }

  getpharmacyByid(pharmacyid :any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getPharmacyById/${pharmacyid}`).toPromise();
    }

    updatepaharmacy(model: any): Observable<any> {
      return this.http.put(`${environment.Base_URL}updatepharmacy`, model);
    }
    deletepharmacy(pharmacyid:any):Observable<any>{
      return this.http.delete(`${environment.Base_URL}deletepharmacy/${pharmacyid}`)
    }

}
