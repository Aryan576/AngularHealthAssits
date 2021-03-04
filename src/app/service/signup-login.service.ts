import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private http:HttpClient,private userData:UserserviceService,private rut:Router) { }
  signup(model:any): Observable<any>
  {
    return this.http.post(`${environment.Base_URL}signup`,model);
  }
  
  login(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}login`,model);
  }
  isLoggedIn(){
    if(this.userData.user.email.length== 0 && this.userData.user.password.length ==0)
    {
      this.rut.navigateByUrl('signup-login')
      return false
    }else{
      return true
    }

  }
}
