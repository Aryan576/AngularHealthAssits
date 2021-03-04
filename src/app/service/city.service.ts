
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient,private userData:UserserviceService,private rut:Router) { }

  citylist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getCity`).toPromise()
  }

}
