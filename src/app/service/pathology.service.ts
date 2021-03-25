import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http:HttpClient,private userData:UserserviceService,private rut:Router) { }

  pathologylist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listPathology`).toPromise();
  }

  addpathology(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addPathology`,model);
  }
  getpathologyByid(pathologyid :any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getPathologyById/${pathologyid}`).toPromise();
    }

    updatepathology(model: any): Observable<any> {
      return this.http.put(`${environment.Base_URL}updatepathology`, model);
    }

    deletepathology(pathologyid:any):Observable<any>{
      return this.http.delete(`${environment.Base_URL}deletepathology/${pathologyid}`)
    }
    addUserPathology(model :any):Observable<any> {
      return this.http.post(`${environment.Base_URL}addUserPathology`,model);
    }

    getAssignUserPathology():Promise<any> {
      return this.http.get(`${environment.Base_URL}getAssignUserPathology`).toPromise();
    }



    addAssignUserPathology(model :any):Observable<any> {
      return this.http.post(`${environment.Base_URL}addAssignUserPathology`,model);
    }

    listcities():Promise <any> {
      return this.http.get(`${environment.Base_URL}listCities`).toPromise();
    }

    listUserPathology(userid : any):Promise<any> {
      return this.http.get(`${environment.Base_URL}listUserPathology/${userid}`).toPromise();
    }
  
  
   
}
