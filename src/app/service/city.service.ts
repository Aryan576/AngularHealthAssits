
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient,private userData:UserserviceService,private rut:Router) { }

  citylist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listCities`).toPromise()
  }

  listCities():Promise<any> {
    return this.http.get(`${environment.Base_URL}listCities`).toPromise();
    }
    
    listStates():Promise<any> {
    return this.http.get(`${environment.Base_URL}listState`).toPromise();
    }
    
    addCities(model :any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addCities`,model);
    }
    
    getCitiesByid(cityid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getCities/${cityid}`).toPromise();
    }
    
    updateCities(model : any):Observable<any> {
    return this.http.put(`${environment.Base_URL}updateCities`,model);
    }
    
    deleteCities(CityId : any):Observable<any> {
    return this.http.delete(`${environment.Base_URL}addCities/${CityId}`);
    }

}
